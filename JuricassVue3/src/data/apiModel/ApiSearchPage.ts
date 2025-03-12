import { SearchPage } from '../model/SearchPage';
import { ApiDecision } from './ApiDecision';
import { ApiSearchQuery } from './ApiSearchQuery';

export class ApiSearchPage {
  page?: number;
  page_size?: number;
  query?: ApiSearchQuery;
  results?: ApiDecision[];
  total?: number;
  previous_page?: string | null;
  next_page?: string | null;
  took?: number;
  max_score?: number;
  relaxed?: boolean;
  search_query?: string;

  constructor(data: Partial<ApiSearchPage> = {}) {
    this.page = data.page;
    this.page_size = data.page_size;
    this.query = new ApiSearchQuery(data.query);
    this.results = data.results;
    this.total = data.total;
    this.previous_page = data.previous_page;
    this.next_page = data.next_page;
    this.took = data.took;
    this.max_score = data.max_score;
    this.relaxed = data.relaxed;
    this.search_query = data.search_query;
  }

  static adaptToApi(searchPage: SearchPage): ApiSearchPage {
    return new ApiSearchPage({
      page: searchPage.page,
      page_size: searchPage.pageSize,
      query: new ApiSearchQuery(searchPage.query),
      results: searchPage.results?.map(r => ApiDecision.adaptToApi(r)), 
      total: searchPage.total,
      previous_page: searchPage.previousPage,
      next_page: searchPage.nextPage,
      took: searchPage.took,
      max_score: searchPage.maxScore,
      relaxed: searchPage.relaxed,
      search_query: searchPage.searchQuery,
    });
  }
}

