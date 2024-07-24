"use client";

import { PODCAST_IMAGE_ATTRIBUTES } from "@/src/app/constants";
import { getResizedImageUrl } from "@/src/app/lib/utils";
import { Podcasts } from "@/src/app/types";
import { Box, Card, CardHeader } from "@chakra-ui/react";
import Image from "next/image";

interface PodcastCardProps {
  podcast: Podcasts["contentCards"]["edges"][number];
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  const resizedImageUri = getResizedImageUrl(
    podcast.image.uri,
    PODCAST_IMAGE_ATTRIBUTES.IMAGE_WIDTH,
    PODCAST_IMAGE_ATTRIBUTES.IMAGE_HEIGHT,
  );

  return (
    <Card size="md">
      <Image
        className="object-cover w-auto h-auto rounded-t-lg"
        src={resizedImageUri}
        alt={podcast.name}
        width={PODCAST_IMAGE_ATTRIBUTES.IMAGE_WIDTH}
        height={PODCAST_IMAGE_ATTRIBUTES.IMAGE_HEIGHT}
      />
      <CardHeader>
        <Box>
          {podcast.categories.length && (
            <h2 className="mb-0 text-lg font-normal text-gray-500">{podcast.categories[0].name}</h2>
          )}
          <h1 className="mt-0 text-2xl font-bold">{podcast.name}</h1>
        </Box>
        <Box>
          {podcast.experts.length && (
            <>
              <p className="text-base">{`${podcast.experts[0].firstName} ${podcast.experts[0].lastName}`}</p>
              <p className="text-base font-bold text-gray-500">{podcast.experts[0].company}</p>
            </>
          )}
        </Box>
      </CardHeader>
    </Card>
  );
};

export default PodcastCard;
