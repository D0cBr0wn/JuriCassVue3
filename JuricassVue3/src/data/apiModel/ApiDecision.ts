import { Decision } from '../model/Decision'
import { ApiFileLink } from './ApiFileLink'
import { ApiSearchHighlight } from './ApiSearchHighlight'

export class ApiDecision {
  id: string
  score: number | null
  highlights?: ApiSearchHighlight[]
  jurisdiction: string
  chamber: string
  number: string
  numbers: string[]
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

  constructor(data?: Partial<ApiDecision> | null) {
    this.id = data?.id ?? ''
    this.score = data?.score ?? null
    this.highlights = data?.highlights ? data.highlights.map(h => new ApiSearchHighlight(h)) : undefined
    this.jurisdiction = data?.jurisdiction ?? ''
    this.chamber = data?.chamber ?? ''
    this.number = data?.number ?? ''
    this.numbers = data?.numbers ?? []
    this.ecli = data?.ecli
    this.formation = data?.formation
    this.publication = data?.publication ?? []
    this.decision_date = data?.decision_date ?? ''
    this.type = data?.type
    this.solution = data?.solution ?? ''
    this.solution_alt = data?.solution_alt
    this.summary = data?.summary
    this.bulletin = data?.bulletin
    this.files = data?.files?.map(f => new ApiFileLink(f))
    this.themes = data?.themes
  }

  static adaptToApi(decision: Decision): ApiDecision {
    return new ApiDecision({
      id: decision.id,
      score: decision.score ?? null,
      highlights: decision?.highlights ? decision.highlights.map(h => ApiSearchHighlight.adaptToApi(h)) : undefined,
      jurisdiction: decision.jurisdiction,
      chamber: decision.chamber,
      number: decision.number,
      numbers: decision.numbers,
      ecli: decision.ecli,
      formation: decision.formation,
      publication: decision.publication,
      decision_date: decision.decisionDate,
      type: decision.type,
      solution: decision.solution,
      solution_alt: decision.solutionAlt,
      summary: decision.summary,
      bulletin: decision.bulletin,
      files: decision.files?.map(f => ApiFileLink.adaptToApi(f)),
      themes: decision.themes
    })
  }

  // get formattedDecisionDate() {
  //   const date = new Date(this.decisionDate)
  //   const day = date.getDate().toString().padStart(2, '0')
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0')
  //   const year = date.getFullYear().toString()
  //   return `${day}/${month}/${year}`
  // }
}
