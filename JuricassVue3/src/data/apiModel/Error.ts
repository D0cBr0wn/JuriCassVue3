import { Error as ModelError } from '../model/Error'

export class Error {
  message: string

  constructor(data: Partial<Error> = {}) {
    this.message = data?.message ?? ''
  }

  static adaptToApi(error: ModelError): Error {
    return new Error({
      message: error.message
    })
  }

  static adaptFromApi(apiError: Error): ModelError {
    return new ModelError({
      message: apiError.message
    })
  }
}
