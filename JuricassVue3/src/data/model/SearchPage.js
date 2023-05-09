export class SearchPage {
  constructor(data = {}) {
    this.page = data?.page
    this.pageSize = data?.pageSize
    this.query = data?.query
    this.results = data?.results
    this.total = data?.total
    this.previousPage = data?.previousPage
    this.nextPage = data?.nextPage
    this.took = data?.took
    this.maxScore = data?.maxScore
    this.relaxed = data?.relaxed
    this.searchQuery = data?.searchQuery
  }
}
