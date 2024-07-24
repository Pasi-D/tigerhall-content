import PodcastList from "./components/ui/PodcastList";

// https://github.com/apollographql/apollo-client-nextjs/issues/332
const Home: React.FC = async () => {
  return (
    <main className="flex min-h-screen items-center flex-col font-pp md:p-24 p-8">
      <PodcastList />
    </main>
  );
};

export default Home;
