import { Box, Text } from "@chakra-ui/react";
import PodcastList from "./components/ui/podcasts/PodcastList";

const Home: React.FC = async () => {
  return (
    <main className="flex min-h-screen items-center flex-col font-pp md:p-24 p-8">
      <Box mb={3}>
        <Text fontSize="xx-large" color="brand.primary" fontWeight="bold">
          Tigerhall podcasts
        </Text>
      </Box>
      <PodcastList />
    </main>
  );
};

export default Home;
