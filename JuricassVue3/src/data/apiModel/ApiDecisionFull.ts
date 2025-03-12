import { Decision } from '../model/Decision'
import { DecisionFull } from '../model/DecisionFull'
import { DecisionLink } from '../model/DecisionLink'
import { ApiDecisionLink } from './ApiDecisionLink'
import { ApiFileLink } from './ApiFileLink'
import { ApiTextLink } from './ApiTextLink'
import { ApiZone } from './ApiZone'

export class ApiDecisionFull {
  id: string
  zones?: ApiZone
  text?: string
  text_highlight?: string
  nac?: string
  decision_datetime?: string
  update_date?: string
  update_datetime?: string
  visa?: ApiTextLink[]
  contested?: ApiDecisionLink
  forward?: ApiDecisionLink
  rapprochements?: ApiDecisionLink[]
  timeline?: ApiDecisionLink[]
  to_be_deleted?: boolean
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
  decision_date: string
  type?: string
  solution: string
  solution_alt?: string
  summary?: string
  bulletin?: string
  files?: ApiFileLink[]
  themes?: string[]

  constructor(data: Partial<ApiDecisionFull> = {}) {
    this.id = data?.id ?? ''
    this.zones = data.zones ? new ApiZone(data?.zones) : undefined
    this.text = data?.text
    this.text_highlight = data?.text_highlight
    this.nac = data?.nac
    this.update_date = data?.update_date
    this.update_datetime = data?.update_datetime
    this.visa = data.visa ? data.visa.map(t => new ApiTextLink(t)) : undefined
    this.rapprochements = data.rapprochements ? data.rapprochements?.map(r => new ApiDecisionLink(r)) : undefined
    this.to_be_deleted = data?.to_be_deleted ?? false
    this.jurisdiction = data?.jurisdiction ?? ''
    this.chamber = data?.chamber ?? ''
    this.number = data?.number ?? ''
    this.numbers = data?.numbers ?? []
    this.ecli = data?.ecli
    this.formation = data?.formation
    this.publication = data?.publication ?? []
    this.decision_datetime = data?.decision_datetime
    this.type = data?.type
    this.solution = data?.solution ?? ''
    this.solution_alt = data?.solution_alt
    this.summary = data?.summary
    this.bulletin = data?.bulletin
    this.files = data.files ? data.files?.map(f => new ApiFileLink(f)) : undefined
    this.themes = data?.themes
    this.forward = data.forward ? new ApiDecisionLink(data.forward) : undefined
    this.contested = data.contested ? new ApiDecisionLink(data.contested) : undefined
    this.timeline = data.timeline ? data.timeline.map(t => new ApiDecisionLink(t)) : undefined
    this.partial = data?.partial ?? false
    this.legacy = data?.legacy
    this.particularInterest = data?.particularInterest ?? false
    this.titlesAndSummaries = data.titlesAndSummaries ?? []
    this.decision_date = data?.decision_date ?? ''
  }

  // get decisionDateAsObject() {
  //   return new Date(this.decisionDate)
  // }

  // get formattedDecisionDate() {
  //   const date = new Date(this.decisionDate)
  //   const day = date.getDate().toString().padStart(2, '0')
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0')
  //   const year = date.getFullYear().toString()
  //   return `${day}/${month}/${year}`
  // }
  static adaptToApi(decision: DecisionFull): ApiDecisionFull {
    return new ApiDecisionFull({
      id: decision.id,
      zones: decision.zones ? ApiZone.adaptToApi(decision.zones) : undefined,
      text: decision.text,
      text_highlight: decision.textHighlight,
      nac: decision.nac,
      update_date: decision.updateDate,
      update_datetime: decision.updateDateTime,
      visa: decision.visa ? decision.visa?.map(tl => ApiTextLink.adaptToApi(tl)) : undefined,
      rapprochements: decision.rapprochements?.map(r => ApiDecisionLink.adaptToApi(r)),
      to_be_deleted: decision.toBeDeleted,
      jurisdiction: decision.jurisdiction,
      chamber: decision.chamber,
      number: decision.number,
      numbers: decision.numbers,
      ecli: decision.ecli,
      formation: decision.formation,
      publication: decision.publication,
      decision_datetime: decision.decisionDateTime,
      decision_date: decision.decisionDate,
      type: decision.type,
      solution: decision.solution,
      solution_alt: decision.solutionAlt,
      summary: decision.summary,
      bulletin: decision.bulletin,
      files: decision.files ? decision.files?.map(f => ApiFileLink.adaptToApi(f)) : undefined,
      themes: decision.themes,
      forward: decision.forward ? ApiDecisionLink.adaptToApi(decision.forward) : undefined,
      contested: decision.contested ? ApiDecisionLink.adaptToApi(decision.contested) : undefined,
      timeline: decision.timeline ? decision.timeline?.map(t => ApiDecisionLink.adaptToApi(t)) : undefined,
      partial: decision.partial,
      legacy: decision.legacy,
      particularInterest: decision.particularInterest,
      titlesAndSummaries: decision.titlesAndSummaries ?? []
    })
  }
}
