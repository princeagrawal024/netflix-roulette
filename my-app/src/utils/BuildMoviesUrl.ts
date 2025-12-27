type MoviesQueryParams = {
  baseUrl: string;
  sortBy?: string | null;
  sortOrder?: string | null;
  searchBy?: string | null;
  filter?: string | null;
  offset?: number | null;
  limit?: number | null;
  movieSearchString?: string | null;
};

export default function buildMoviesUrl({
  baseUrl,
  sortBy,
  sortOrder,
  searchBy,
  filter,
  movieSearchString,
  offset,
  limit,
}: MoviesQueryParams): string {
  const params = new URLSearchParams();
  params.append('sortBy', sortBy ?? 'title');
  params.append('sortOrder', sortOrder ?? 'asc');
  params.append('searchBy', searchBy ?? 'genres');
  params.append('filter', filter && filter !== 'ALL' ? filter : '');
  params.append('search', movieSearchString && movieSearchString !== '' ? movieSearchString : '');
  params.append('offset', String(offset ?? 0));
  params.append('limit', String(limit ?? 1000));
  return `${baseUrl}?${params.toString()}`;
}
