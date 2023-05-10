import { v4 as uuidv4 } from 'uuid'
export class Error {
  constructor(data = {}) {
    this.id = uuidv4()
    this.message = data?.message
  }
}
