export class SearchResult {
  constructor(data = {}) {
    this.score = data?.score
    this.highlights = data?.highlights
    this.id = data?.id
    this.jurisdiction = data?.jurisdiction
    this.chamber = data?.chamber
    this.number = data?.number
    this.numbers = data?.numbers
    this.ecli = data?.ecli
    this.formation = data?.formation
    this.publication = data?.publication
    this.decisionDate = data?.decision_date
    this.type = data?.type
    this.solution = data?.solution
    this.solutionAlt = data?.solutionAlt
    this.summary = data?.summary
    this.bulletin = data?.bulletin
    this.files = data?.files
    this.themes = data?.themes
  }

  get formattedDecisionDate() {
    const date = new Date(this.decisionDate)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${day}/${month}/${year}`
  }
}
