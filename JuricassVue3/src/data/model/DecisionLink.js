export class DecisionLink {
  constructor(data = {}) {
    this.id = data?.id
    this.url = data?.URL
    this.description = data?.description
    this.theme = data?.theme
    this.number = data?.number
  }
}
