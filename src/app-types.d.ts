type AppStateType = {
  query: string;
  results: Array<SearchAPIResponseElement>; // SearchAPIResponseElement[]
  loading: boolean;
  articleOfTheDay: ArticleOfTheDay | null;
};

type SearchAPIResponseElement = {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
};

type SearchAPIResponse = {
  batchcomplete: string;
  continue: {
    sroffset: number;
    continue: string;
  };
  query: {
    searchinfo: {
      totalhits: number;
    };
    search: Array<SearchAPIResponseElement>;
  };
};

type ArticleOfTheDayAPIResponse = {
  mostread : {
    articles: ArticleOfTheDay[]
  }
};

type ArticleOfTheDay = {
  title: string;
  extract: string;
};
