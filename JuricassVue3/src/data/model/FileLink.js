export class FileLink {
  constructor(data = {}) {
    this.id = data?.id
    this.url = data?.url
    this.type = data?.type
    this.label = data?.label
  }
}
