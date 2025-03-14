export class Error {
  message: string

  constructor(data: Partial<Error> = {}) {
    this.message = data?.message ?? ''
  }
}
