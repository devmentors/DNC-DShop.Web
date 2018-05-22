export class PagedResult<TData> {
  totalResults: number = 0;
  pageSize: number = 5;
  pages: number = Math.ceil(this.totalResults / this.pageSize);
  isEmpty: boolean = this.totalResults === 0;
  items: TData[];

  constructor(totalResults: number, items: TData[]) {
    this.totalResults = totalResults;
    this.items = items;
  }
}
