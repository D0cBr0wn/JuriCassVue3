import { ApiSearchQuery } from "../apiModel/ApiSearchQuery";

export class SearchQuery {
  query: string;
  field: string[];
  operator: string;
  type: string[];
  theme: string[];
  chamber: string[];
  formation: string[];
  jurisdiction: string[];
  publication: string[];
  solution: string[];
  withFileOfType: string[];
  dateStart: string;
  dateEnd: string;
  sort: string;
  order: string;
  pageSize: number;
  page: number;
  resolveReferences: boolean;
  particularInterest: boolean;

  constructor(data?: Partial<SearchQuery> | null) {
    this.query = data?.query ?? '';
    this.field = data?.field ?? [];
    this.operator = data?.operator ?? 'or';
    this.type = data?.type ?? [];
    this.theme = data?.theme ?? [];
    this.chamber = data?.chamber ?? [];
    this.formation = data?.formation ?? [];
    this.jurisdiction = data?.jurisdiction ?? [];
    this.publication = data?.publication ?? [];
    this.solution = data?.solution ?? [];
    this.withFileOfType = data?.withFileOfType ?? [];
    this.dateStart = data?.dateStart ?? '';
    this.dateEnd = data?.dateEnd ?? '';
    this.sort = data?.sort ?? 'scorepub';
    this.order = data?.order ?? 'desc';
    this.pageSize = data?.pageSize ?? 10;
    this.page = data?.page ?? 0;
    this.resolveReferences = data?.resolveReferences ?? false;
    this.particularInterest = data?.particularInterest ?? false;
  }

  static adaptFromApi(apiSearchQuery: ApiSearchQuery): SearchQuery {
    return new SearchQuery({
      query: apiSearchQuery.query,
      field: apiSearchQuery.field,
      operator: apiSearchQuery.operator,
      type: apiSearchQuery.type,
      theme: apiSearchQuery.theme,
      chamber: apiSearchQuery.chamber,
      formation: apiSearchQuery.formation,
      jurisdiction: apiSearchQuery.jurisdiction,
      publication: apiSearchQuery.publication,
      solution: apiSearchQuery.solution,
      withFileOfType: apiSearchQuery.withFileOfType,
      dateStart: apiSearchQuery.date_start,
      dateEnd: apiSearchQuery.date_end,
      sort: apiSearchQuery.sort,
      order: apiSearchQuery.order,
      pageSize: apiSearchQuery.page_size,
      page: apiSearchQuery.page,
      resolveReferences: apiSearchQuery.resolve_references,
      particularInterest: apiSearchQuery.particularInterest,
    });
  }
}