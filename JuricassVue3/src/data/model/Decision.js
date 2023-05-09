export class Decision {
  constructor(data = {}) {
    this.id = data?.id
    this.source = data?.source
    this.zones = data?.zones
    this.text = data?.text
    this.textHighlight = data?.text_highlight
    this.nac = data?.nac
    this.updateDate = data?.update_date
    this.visa = data?.visa
    this.rapprochements = data?.rapprochements
    this.toBeDeleted = data?.to_be_deleted ?? false
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
    this.solutionAlt = data?.solution_alt
    this.summary = data?.summary
    this.bulletin = data?.bulletin
    this.files = data?.files
    this.themes = data?.themes
    this.portalis = data?.portalis
    this.forward = data?.forward
    this.contested = data?.contested
    this.timeline = data?.timeline
    this.partial = data?.partial
    this.legacy = data?.legacy
  }

  get decisionDateAsObject() {
    return new Date(this.decisionDate)
  }

  get formattedDecisionDate() {
    const date = new Date(this.decisionDate)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${day}/${month}/${year}`
  }
}
