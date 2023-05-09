export class Judgement {
  constructor(data = {}) {
    this.id = data?.id
    this.date = data?.date
    this.title = data?.title
    this.jurisdiction = data?.jurisdiction
    this.chamber = data?.chamber
    this.solution = data?.solution
    this.number = data?.number
    this.url = data?.url
  }
}
