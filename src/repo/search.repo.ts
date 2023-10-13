const WIKI_URL =
  "/api/w/api.php?action=query&format=json&list=search&srsearch=";

export const getSearchApi = async (
  query: string
): Promise<SearchAPIResponseElement[]> => {
  try {
    const res: Response = await fetch(`${WIKI_URL}${query}`, { method: "GET" });
    const json: SearchAPIResponse = await res.json();
    return json.query.search;
  } catch (e) {
    // Not for production
    console.error(e);
    return [];
  }
};

const WIKI_OF_THE_DAY_URL = "/api/api/rest_v1/feed/featured/2023/10/12";

// Implementare la funzione getWikiOfTheDayApi che fa una chiamata all'endpoint
// e carica un articolo del giorno

export const getArticleOfTheDay = async (): Promise<ArticleOfTheDay | null> => {
  try {
    // fetch API
    const res: Request = await fetch("", { method: "GET" }); // INSERT API URL
    //const json: ArticleOfTheDayAPIResponse = await res.json();
    //return json.tfa;
    return {
      title: "Article of the day", // MOCK
      extract: "Lorem ipsum dolor sit amet", // MOCK
    };
  } catch (e) {
    // Not for production
    console.error(e);
    return null;
  }
};
