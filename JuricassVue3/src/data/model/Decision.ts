import { ApiDecision } from '../apiModel/ApiDecision'
import { FileLink } from './FileLink'
import { SearchHighlight } from './SearchHighlight'

export class Decision {
  id: string
  score: number | null
  highlights?: SearchHighlight
  jurisdiction: string
  chamber: string
  number: string
  numbers: string[]
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

  constructor(data?: Partial<Decision> | null) {
    this.id = data?.id ?? ''
    this.score = data?.score ?? null
    this.highlights = data?.highlights ? new SearchHighlight(data.highlights) : undefined
    this.jurisdiction = data?.jurisdiction ?? ''
    this.chamber = data?.chamber ?? ''
    this.number = data?.number ?? ''
    this.numbers = data?.numbers ?? []
    this.ecli = data?.ecli
    this.formation = data?.formation
    this.publication = data?.publication ?? []
    this.decisionDate = data?.decisionDate ?? ''
    this.type = data?.type
    this.solution = data?.solution ?? ''
    this.solutionAlt = data?.solutionAlt
    this.summary = data?.summary
    this.bulletin = data?.bulletin
    this.files = data?.files?.map(f => new FileLink(f))
    this.themes = data?.themes
  }

  static adaptFromApi(apiDecision: ApiDecision): Decision {
    return new Decision({
      id: apiDecision.id,
      score: apiDecision.score ?? null,
      highlights: apiDecision?.highlights ? SearchHighlight.adaptFromApi(apiDecision.highlights) : undefined,
      jurisdiction: apiDecision.jurisdiction,
      chamber: apiDecision.chamber,
      number: apiDecision.number,
      numbers: apiDecision.numbers,
      ecli: apiDecision.ecli,
      formation: apiDecision.formation,
      publication: apiDecision.publication,
      decisionDate: apiDecision.decision_date,
      type: apiDecision.type,
      solution: apiDecision.solution,
      solutionAlt: apiDecision.solution_alt,
      summary: apiDecision.summary,
      bulletin: apiDecision.bulletin,
      files: apiDecision.files?.map(f => FileLink.adaptFromApi(f)),
      themes: apiDecision.themes
    })
  }
}
