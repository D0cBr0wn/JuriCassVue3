import { SearchHighlight } from '../model/SearchHighlight'

export class ApiSearchHighlight {
  key: string
  value: string[]

  constructor(data?: Partial<ApiSearchHighlight>) {
    this.key = data?.key ?? ''
    this.value = data?.value ?? []
  }

  static adaptToApi(searchHighlight: SearchHighlight): ApiSearchHighlight {
    return new ApiSearchHighlight({
      key: searchHighlight.key,
      value: searchHighlight.value
    })
  }
}
