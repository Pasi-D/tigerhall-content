"use client";

import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { SimpleGrid, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useQuery } from "@apollo/client";
import { debounce } from "lodash";

import SearchBar from "../SearchBar";
import Loading from "../Loading";
import PodcastCard from "./PodcastCard";
import { GetPodcastsVariables, Podcasts } from "../../../types";
import {
  ITEMS_PER_PAGE,
  PODCAST_GRID_COLUMNS_LAYOUT,
  SEARCH_DEBOUNCE_THRESHOLD,
} from "../../../constants";
import { GET_PODCASTS_QUERY } from "../../../lib/graphql/queries";
import { generateRandomProgress } from "@/src/app/lib/utils";
import SkeletonCard from "../SkeletonCard";

interface PodcastListProps {}

const PodcastList: React.FC<PodcastListProps> = () => {
  const [ref, inView] = useInView({ threshold: 0 });

  const LOADING_SKELETON_COUNT = useBreakpointValue(
    {
      base: 2,
      md: 6,
    },
    { fallback: "md" },
  );

  const [hasMore, setHasMore] = useState(false);
  const [podcasts, setPodcasts] = useState<Podcasts["contentCards"]["edges"]>([]);
  const [meta, setMeta] = useState<Podcasts["contentCards"]["meta"]>();
  const [searchKeywords, setSearchKeywords] = useState("");
  const [debouncedSearchKeywords, setDebouncedSearchKeywords] = useState("");

  const { data, fetchMore, loading } = useQuery<Podcasts, GetPodcastsVariables>(
    GET_PODCASTS_QUERY,
    {
      variables: {
        keywords: debouncedSearchKeywords,
        limit: ITEMS_PER_PAGE,
        offset: 0,
      },
    },
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearchKeywords(value);
      }, SEARCH_DEBOUNCE_THRESHOLD),
    [],
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeywords(event.target.value);
    debouncedSearch(event.target.value);
  };

  const fetchMorePodcasts = useCallback(async () => {
    try {
      if (
        meta?.total &&
        ((meta?.offset && meta.offset >= meta.total) || ITEMS_PER_PAGE >= meta.total)
      ) {
        setHasMore(false);
        return;
      }
      const { data: newData } = await fetchMore({
        variables: {
          limit: ITEMS_PER_PAGE,
          keywords: debouncedSearchKeywords,
          offset: (meta?.offset || 0) + ITEMS_PER_PAGE,
        },
      });

      if (newData.contentCards.edges.length > 0) {
        setPodcasts(prev => [...prev, ...newData.contentCards.edges]);
        setMeta(newData.contentCards.meta);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("GraphQL fetch error :", error);
    }
  }, [meta?.total, meta?.offset, fetchMore, debouncedSearchKeywords]);

  useEffect(() => {
    if (data?.contentCards) {
      setPodcasts(data?.contentCards.edges || []);
      setMeta(data.contentCards.meta);
      setHasMore(!(data.contentCards.meta.offset >= data.contentCards.meta.total));
    }
  }, [data]);

  useEffect(() => {
    if (inView && hasMore && !loading) {
      fetchMorePodcasts();
    }
  }, [fetchMorePodcasts, hasMore, inView, loading]);

  const renderSkeletons = () => (
    <SimpleGrid
      spacing={5}
      columns={PODCAST_GRID_COLUMNS_LAYOUT}
      className="w-full sm:max-w-5xl justify-between lg:flex text-sm"
    >
      {Array(LOADING_SKELETON_COUNT)
        .fill(0)
        .map((_, index) => (
          <SkeletonCard key={`skeleton-${index}`} />
        ))}
    </SimpleGrid>
  );

  return (
    <Stack direction="column" data-testid="podcast-list">
      <div className="w-full max-w-5xl mb-3">
        <SearchBar placeholder="Search.." onChange={handleSearchChange} value={searchKeywords} />
      </div>
      {loading ? (
        renderSkeletons()
      ) : meta && meta.total == 0 ? (
        <div className="mt-3 self-center">
          <p>No podcasts found</p>
        </div>
      ) : (
        <>
          <div className="w-full sm:max-w-5xl justify-between text-sm lg:flex">
            <SimpleGrid spacing={5} columns={PODCAST_GRID_COLUMNS_LAYOUT}>
              {podcasts.map((podcast, index) => (
                <PodcastCard
                  key={`podcast-grid-item-${index}`}
                  podcast={podcast}
                  progress={generateRandomProgress(index)}
                />
              ))}
            </SimpleGrid>
          </div>
          {hasMore && (
            <div className="mt-3 self-center" ref={ref} data-testid="loading-indicator">
              <Loading />
            </div>
          )}
        </>
      )}
    </Stack>
  );
};

export default PodcastList;
