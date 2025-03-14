import { Decision } from './Decision'
import { SearchQuery } from './SearchQuery'

export class SearchPage {
  page?: number
  pageSize?: number
  query?: SearchQuery
  results?: Decision[]
  total?: number
  previousPage?: string | null
  nextPage?: string | null
  took?: number
  maxScore?: number
  relaxed?: boolean
  searchQuery?: string

  constructor(data: Partial<SearchPage> = {}) {
    this.page = data.page
    this.pageSize = data.pageSize
    this.query = new SearchQuery(data.query)
    this.results = data.results
    this.total = data.total
    this.previousPage = data.previousPage
    this.nextPage = data.nextPage
    this.took = data.took
    this.maxScore = data.maxScore
    this.relaxed = data.relaxed
    this.searchQuery = data.searchQuery
  }

  static adaptFromApi(apiData: any): SearchPage {
    return new SearchPage({
      page: apiData.page,
      pageSize: apiData.page_size,
      query: new SearchQuery(apiData.query),
      results: apiData.results.map(r => Decision.adaptFromApi(r)),
      total: apiData.total,
      previousPage: apiData.previous_page,
      nextPage: apiData.next_page,
      took: apiData.took,
      maxScore: apiData.max_score,
      relaxed: apiData.relaxed,
      searchQuery: apiData.search_query
    })
  }
}
