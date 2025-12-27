import buildMoviesUrl from "@/utils/BuildMoviesUrl";
import { BASE_URL } from "@/data/app-data";

describe("buildMoviesUrl", () => {
  it("should build correct movie fetch URL", () => {
    const params = {
      baseUrl: BASE_URL,
      sortBy: "title",
      sortOrder: "asc",
      searchBy: "title",
      filter: null,
      movieSearchString: null,
      offset: 0,
      limit: 50,
    };

    const url = buildMoviesUrl(params);

    expect(url).toBe(
      `${BASE_URL}?sortBy=title&sortOrder=asc&searchBy=title&filter=&search=&offset=0&limit=50`
    );
  });
});
