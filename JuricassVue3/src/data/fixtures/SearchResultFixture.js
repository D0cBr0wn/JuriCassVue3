import { SearchResult } from '@model/SearchResult'
export const createSearchResultFixture = () => {
  return new SearchResult({
    score: 666.666,
    id: 'hdjzhsjshsjs',
    jurisdiction: 'cc',
    chamber: 'chamber',
    numbers: ['5667'],
    number: '6475758',
    publication: ['bulletin'],
    decisionDate: '2023-06-06',
    type: 'type',
    solution: 'rejet',
    summary: '',
    highlights: null,
    files: null,
    themes: ['theme1', 'theme2', 'theme3']
  })
}
