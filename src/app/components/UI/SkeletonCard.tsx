// This is a component that indicates loading.
"use client";

import { Card, Skeleton } from "@chakra-ui/react";
import PodcastCard from "./podcasts/PodcastCard";

const SkeletonCard = () => (
  <Skeleton>
    <Card size="lg" boxShadow="md" overflow="hidden" className="w-1/3 h-60">
      <PodcastCard
        progress={20}
        podcast={{
          name: "loading-podcast",
          image: {
            uri: `https://${process.env.NEXT_PUBLIC_IMAGE_HOSTNAME}`,
          },
          categories: [],
          experts: [],
          id: "loading-1",
          length: 100,
        }}
      />
    </Card>
  </Skeleton>
);

export default SkeletonCard;
