import { SearchPage } from '../model/SearchPage'
import { SearchQuery } from '../model/SearchQuery'
import { createSearchResultFixture } from './SearchResultFixture'
import { Decision } from '../model/Decision'

interface SearchPageFixtureOptions {
  results?: Decision[]
}

export const createSearchPageFixture = ({
  results = [createSearchResultFixture()]
}: SearchPageFixtureOptions = {}): SearchPage => {
  return new SearchPage({
    page: 0,
    pageSize: 10,
    query: new SearchQuery({
      query: 'propriété',
      resolveReferences: true
    }),
    total: 10000,
    previousPage: null,
    nextPage:
      'query=propri%C3%A9t%C3%A9&resolve_references=true&field=&type=&theme=&chamber=&formation=&jurisdiction=&location=&publication=&solution=&page=1',
    took: 34,
    maxScore: 1292.1495,
    results,
    relaxed: false,
    searchQuery: 'dmkdmefmez'
  })
}

export const createSearchPageNoResultsFixture = (): SearchPage => {
  return createSearchPageFixture({ results: [] })
}
