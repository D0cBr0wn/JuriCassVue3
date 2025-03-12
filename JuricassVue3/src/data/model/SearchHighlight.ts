import { ApiSearchHighlight } from '../apiModel/ApiSearchHighlight'

export class SearchHighlight {
  key: string
  value: string[]

  constructor(data?: Partial<SearchHighlight>) {
    this.key = data?.key ?? ''
    this.value = data?.value ?? []
  }

  // Converts an ApiSearchHighlight object to SearchHighlight format
  static adaptFromApi(apiSearchHighlight: ApiSearchHighlight): SearchHighlight {
    return new SearchHighlight({
      key: apiSearchHighlight.key,
      value: apiSearchHighlight.value
    })
  }
}
