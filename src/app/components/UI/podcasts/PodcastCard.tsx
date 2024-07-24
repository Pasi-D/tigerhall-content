"use client";

import { Avatar, Box, Card, CardHeader, Flex, Icon, Progress, Stack, Text } from "@chakra-ui/react";
import { RiProgress3Line, RiShareLine, RiBookmarkLine } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa";
import { WiTime3 } from "react-icons/wi";
import Image from "next/image";

import { PODCAST_IMAGE_ATTRIBUTES } from "@/src/app/constants";
import { getPodcastDuration, getResizedImageUrl } from "@/src/app/lib/utils";
import { Podcasts } from "@/src/app/types";

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
    <Card size="lg" boxShadow="md" overflow="hidden">
      <Box position="relative">
        <Image
          className="object-cover w-[100%] h-auto rounded-t-lg"
          src={resizedImageUri}
          alt={podcast.name}
          width={PODCAST_IMAGE_ATTRIBUTES.IMAGE_WIDTH}
          height={PODCAST_IMAGE_ATTRIBUTES.IMAGE_HEIGHT}
        />
        <Flex
          position="absolute"
          top={0}
          left={0}
          alignItems="center"
          bg="white"
          className="rounded-tl-lg rounded-br-lg"
          px={3}
          py={1}
        >
          <Icon as={RiProgress3Line} color="brand.primary" mr={1} opacity={0.75} />
          <Text fontSize="smaller" fontWeight="bold">
            30% Completed
          </Text>
        </Flex>
        <Flex position="absolute" bottom={2} left={1}>
          <Avatar
            bg="brand.primary"
            size="xs"
            icon={<Icon as={FaHeadphones} color="white" fontSize="0.9rem" />}
          />
        </Flex>
        <Flex
          position="absolute"
          bottom={2}
          right={2}
          bg="black"
          opacity={0.5}
          borderRadius="full"
          alignItems="center"
          px={2}
          py={1}
        >
          <Icon as={WiTime3} color="white" mr={1} />
          <Text fontSize="smaller" fontWeight="bold" color="white" opacity={1}>
            {getPodcastDuration(podcast.length)}
          </Text>
        </Flex>
      </Box>
      <Progress colorScheme="orange" value={30} size="xs" />
      <CardHeader p={2}>
        <Flex direction="column" gap={0}>
          {podcast.categories.length && (
            <Text fontSize="smaller" color="gray.500" fontWeight="normal">
              {podcast.categories[0].name.toUpperCase()}
            </Text>
          )}
          <Text fontSize="large" fontWeight="bold">
            {podcast.name}
          </Text>
        </Flex>
        <Box mt={2} pb={8}>
          {podcast.experts.length && (
            <>
              <Text
                fontSize="medium"
                fontWeight="light"
              >{`${podcast.experts[0].firstName} ${podcast.experts[0].lastName}`}</Text>
              <Text fontSize="medium" fontWeight="bold" color="gray.500">
                {podcast.experts[0].company}
              </Text>
            </>
          )}
        </Box>
      </CardHeader>
      <Stack direction="row" spacing={2} position="absolute" bottom={2} right={3}>
        <Icon as={RiShareLine} color="brand.primary" fontSize="x-large" />
        <Icon as={RiBookmarkLine} color="brand.primary" fontSize="x-large" />
      </Stack>
    </Card>
  );
};

export default PodcastCard;
