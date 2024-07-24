interface PodcastCategory {
  id: string;
  name: string;
}

interface PodcastExpert {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
}

interface Podcast {
  id: string;
  name: string;
  image: {
    uri: string;
  };
  length: number;
  categories: Array<PodcastCategory>;
  experts: Array<PodcastExpert>;
}

interface PodcastMeta {
  total: number;
  limit: number;
  offset: number;
  __typename: "PageInfo";
}

export interface Podcasts {
  contentCards: {
    edges: Array<Podcast>;
    meta: PodcastMeta;
  };
}

export interface GetPodcastsVariables {
  limit: number;
  keywords: string;
  offset: number;
}
