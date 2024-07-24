"use client";

import { Box, Card, CardHeader, SimpleGrid } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { GetPodcastsVariables, Podcasts } from "../../types";
import { getResizedImageUrl } from "../../lib/utils";
import { PODCAST_IMAGE_ATTRIBUTES } from "../../constants";
import Image from "next/image";
import { useReadQuery } from "@apollo/client";
import { TransportedQueryRef } from "@apollo/experimental-nextjs-app-support";

interface PodcastListProps {
  queryRef: TransportedQueryRef<Podcasts, GetPodcastsVariables>;
}

const PodcastList: React.FC<PodcastListProps> = ({ queryRef }) => {
  const { data } = useReadQuery(queryRef);

  return (
    <>
      <div className="w-full max-w-5xl mb-3">
        <SearchBar placeholder="Search.." />
      </div>
      <div className="w-full sm:max-w-5xl justify-between text-sm lg:flex">
        <SimpleGrid spacing={5} columns={[1, null, 3]}>
          {data?.contentCards.edges.map((podcast, index) => {
            const resizedImageUri = getResizedImageUrl(
              podcast.image.uri,
              PODCAST_IMAGE_ATTRIBUTES.IMAGE_WIDTH,
              PODCAST_IMAGE_ATTRIBUTES.IMAGE_HEIGHT,
            );
            return (
              <Card key={`podcast-grid-item-${index}`}>
                <Image
                  objectFit="cover"
                  src={resizedImageUri}
                  alt={podcast.name}
                  width={PODCAST_IMAGE_ATTRIBUTES.IMAGE_WIDTH}
                  height={PODCAST_IMAGE_ATTRIBUTES.IMAGE_HEIGHT}
                />
                <CardHeader>
                  <Box>
                    {podcast.categories.length && (
                      <h2 className="mb-0 text-xl font-light text-gray-500">
                        {podcast.categories[0].name}
                      </h2>
                    )}
                    <h1 className="mt-0 text-2xl font-bold">{podcast.name}</h1>
                  </Box>
                  <Box>
                    {podcast.experts.length && (
                      <>
                        <p className="text-base">{`${podcast.experts[0].firstName} ${podcast.experts[0].lastName}`}</p>
                        <p className="text-base font-bold text-gray-500">
                          {podcast.experts[0].company}
                        </p>
                      </>
                    )}
                  </Box>
                </CardHeader>
              </Card>
            );
          })}
        </SimpleGrid>
      </div>
    </>
  );
};

export default PodcastList;
