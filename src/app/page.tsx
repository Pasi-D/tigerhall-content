import { Suspense } from "react";
import { TransportedQueryRef } from "@apollo/experimental-nextjs-app-support";

import PodcastList from "./components/UI/PodcastList";
import { PreloadQuery } from "./lib/client";
import { GET_PODCASTS_QUERY } from "./lib/graphql/queries";
import { GetPodcastsVariables, Podcasts } from "./types";

// https://github.com/apollographql/apollo-client-nextjs/issues/332
const Home: React.FC = async () => {
  return (
    <main className="flex min-h-screen items-center flex-col font-pp md:p-24 p-8">
      <PreloadQuery query={GET_PODCASTS_QUERY} variables={{ limit: 20, keywords: "", offset: 0 }}>
        {queryRef => (
          <Suspense fallback={<>loading</>}>
            <PodcastList
              queryRef={queryRef as TransportedQueryRef<Podcasts, GetPodcastsVariables>}
            />
          </Suspense>
        )}
      </PreloadQuery>
    </main>
  );
};

export default Home;
