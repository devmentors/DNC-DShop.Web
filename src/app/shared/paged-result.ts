export interface PagedResult<TData> {
  currentPage: number;
  resultsPerPage: number;
  totalPages: number;
  totalResults: number;
  items: TData[];
  isEmpty: boolean;
  isNotEmpty: boolean;
}
