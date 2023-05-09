export class SearchQuery {
  constructor(data = {}) {
    this.query = data?.query ?? null
    this.field = data?.field ?? null
    this.operator = data?.operator ?? null
    this.type = data?.type ?? null
    this.theme = data?.theme ?? null
    this.chamber = data?.chamber ?? null
    this.formation = data?.formation ?? null
    this.jurisdiction = data?.jurisdiction ?? null
    this.location = data?.location ?? null
    this.publication = data?.publication ?? null
    this.solution = data?.solution ?? null
    this.dateStart = data?.date_start ?? null
    this.dateEnd = data?.date_end ?? null
    this.sort = data?.sort ?? null
    this.order = data?.order ?? null
    this.pageSize = data?.page_size ?? null
    this.page = data?.page ?? null
    this.resolveReferences = data?.resolve_references ?? false
  }
}
