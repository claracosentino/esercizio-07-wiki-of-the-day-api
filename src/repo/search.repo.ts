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

const WIKI_OF_THE_DAY_URL = "/api/api/rest_v1/feed/featured/";
let date = new Date()
let day = date.getDate()
let year = date.getFullYear()
let month = date.getMonth() + 1

// Implementare la funzione getWikiOfTheDayApi che fa una chiamata all'endpoint
// e carica un articolo del giorno

export const getArticleOfTheDay = async (): Promise<ArticleOfTheDay | null> => {
  try {
    // fetch API
    const res: Response = await fetch(`${WIKI_OF_THE_DAY_URL}${year}/${month}/${day}`, { method: "GET" }); // INSERT API URL
    const json: ArticleOfTheDayAPIResponse = await res.json();
    console.log(json)
    return {
      title: json.mostread.articles[0].title,
      extract: json.mostread.articles[0].extract
    }
  } catch (e) {
    // Not for production
    console.error(e);
    return null;
  }
};
