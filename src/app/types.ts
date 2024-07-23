interface PodcastCategory {
  id: string;
  name: string;
}

interface PodcastExpert {
  firstName: string;
  lastName: string;
  title: string;
}

interface Podcast {
  id: string;
  name: string;
  image: {
    uri: string;
  };
  categories: Array<PodcastCategory>;
  experts: Array<PodcastExpert>;
}

export interface Podcasts {
  contentCards: {
    edges: Array<Podcast>;
  };
}
