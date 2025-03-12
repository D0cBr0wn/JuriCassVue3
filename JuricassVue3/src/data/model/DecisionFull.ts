import { ApiDecisionFull } from '../apiModel/ApiDecisionFull'
import { DecisionLink } from './DecisionLink'
import { FileLink } from './FileLink'
import { TextLink } from './TextLink'
import { Zone } from './Zone'

export class DecisionFull {
  id: string
  zones?: Zone
  text?: string
  textHighlight?: string
  nac?: string
  decisionDateTime?: string
  updateDate?: string
  updateDateTime?: string
  visa?: TextLink[]
  contested?: DecisionLink
  forward?: DecisionLink
  rapprochements?: DecisionLink[]
  timeline?: DecisionLink[]
  toBeDeleted?: boolean
  partial?: boolean
  legacy?: {}
  particularInterest?: boolean
  number: string
  numbers: string[]
  titlesAndSummaries?: {}[]
  jurisdiction: string
  chamber: string
  ecli?: string
  formation?: string
  publication: string[]
  decisionDate: string
  type?: string
  solution: string
  solutionAlt?: string
  summary?: string
  bulletin?: string
  files?: FileLink[]
  themes?: string[]

  constructor(data: Partial<DecisionFull> = {}) {
    this.id = data?.id ?? ''
    this.zones = data.zones ? new Zone(data.zones) : undefined
    this.text = data?.text
    this.textHighlight = data?.textHighlight
    this.nac = data?.nac
    this.updateDate = data?.updateDate
    this.updateDateTime = data?.updateDateTime
    this.visa = data.visa ? data.visa.map(t => new TextLink(t)) : undefined
    this.rapprochements = data.rapprochements ? data.rapprochements.map(r => new DecisionLink(r)) : undefined
    this.toBeDeleted = data?.toBeDeleted ?? false
    this.jurisdiction = data?.jurisdiction ?? ''
    this.chamber = data?.chamber ?? ''
    this.number = data?.number ?? ''
    this.numbers = data?.numbers ?? []
    this.ecli = data?.ecli
    this.formation = data?.formation
    this.publication = data?.publication ?? []
    this.decisionDateTime = data?.decisionDateTime
    this.type = data?.type
    this.solution = data?.solution ?? ''
    this.solutionAlt = data?.solutionAlt
    this.summary = data?.summary
    this.bulletin = data?.bulletin
    this.files = data.files ? data?.files?.map(f => new FileLink(f)) : undefined
    this.themes = data?.themes
    this.forward = data.forward ? new DecisionLink(data.forward) : undefined
    this.contested = data.contested ? new DecisionLink(data.contested) : undefined
    this.timeline = data.timeline ? data.timeline.map(t => new DecisionLink(t)) : undefined
    this.partial = data?.partial ?? false
    this.legacy = data?.legacy
    this.particularInterest = data?.particularInterest ?? false
    this.titlesAndSummaries = data.titlesAndSummaries ?? []
    this.decisionDate = data?.decisionDate ?? ''
  }

  static adaptFromApi(apiDecision: ApiDecisionFull): DecisionFull {
    return new DecisionFull({
      id: apiDecision.id,
      zones: apiDecision.zones ? Zone.adaptFromApi(apiDecision.zones) : undefined,
      text: apiDecision.text,
      textHighlight: apiDecision.text_highlight,
      nac: apiDecision.nac,
      updateDate: apiDecision.update_date,
      updateDateTime: apiDecision.update_datetime,
      visa: apiDecision.visa?.map(tl => TextLink.adaptFromApi(tl)),
      rapprochements: apiDecision.rapprochements
        ? apiDecision.rapprochements?.map(r => DecisionLink.adaptFromApi(r))
        : undefined,
      toBeDeleted: apiDecision.to_be_deleted,
      jurisdiction: apiDecision.jurisdiction,
      chamber: apiDecision.chamber,
      number: apiDecision.number,
      numbers: apiDecision.numbers,
      ecli: apiDecision.ecli,
      formation: apiDecision.formation,
      publication: apiDecision.publication,
      decisionDateTime: apiDecision.decision_datetime,
      decisionDate: apiDecision.decision_date,
      type: apiDecision.type,
      solution: apiDecision.solution,
      solutionAlt: apiDecision.solution_alt,
      summary: apiDecision.summary,
      bulletin: apiDecision.bulletin,
      files: apiDecision.files ? apiDecision.files?.map(f => FileLink.adaptFromApi(f)) : undefined,
      themes: apiDecision.themes,
      forward: apiDecision.forward ? DecisionLink.adaptFromApi(apiDecision.forward) : undefined,
      contested: apiDecision.contested ? DecisionLink.adaptFromApi(apiDecision.contested) : undefined,
      timeline: apiDecision.timeline ? apiDecision.timeline?.map(t => DecisionLink.adaptFromApi(t)) : undefined,
      partial: apiDecision.partial,
      legacy: apiDecision.legacy,
      particularInterest: apiDecision.particularInterest,
      titlesAndSummaries: apiDecision.titlesAndSummaries ?? []
    })
  }
}
