import { SearchQuery } from "../model/SearchQuery";

export class ApiSearchQuery {
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
  date_start: string;
  date_end: string;
  sort: string;
  order: string;
  page_size: number;
  page: number;
  resolve_references: boolean;
  particularInterest: boolean;

  constructor(data?: Partial<ApiSearchQuery> | null) {
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
    this.date_start = data?.date_start ?? '';
    this.date_end = data?.date_end ?? '';
    this.sort = data?.sort ?? 'scorepub';
    this.order = data?.order ?? 'desc';
    this.page_size = data?.page_size ?? 10;
    this.page = data?.page ?? 0;
    this.resolve_references = data?.resolve_references ?? false;
    this.particularInterest = data?.particularInterest ?? false;
  }

  static adaptToApi(searchQuery: SearchQuery): ApiSearchQuery {
    return new ApiSearchQuery({
      query: searchQuery.query,
      field: searchQuery.field,
      operator: searchQuery.operator,
      type: searchQuery.type,
      theme: searchQuery.theme,
      chamber: searchQuery.chamber,
      formation: searchQuery.formation,
      jurisdiction: searchQuery.jurisdiction,
      publication: searchQuery.publication,
      solution: searchQuery.solution,
      withFileOfType: searchQuery.withFileOfType,
      date_start: searchQuery.dateStart,
      date_end: searchQuery.dateEnd,
      sort: searchQuery.sort,
      order: searchQuery.order,
      page_size: searchQuery.pageSize,
      page: searchQuery.page,
      resolve_references: searchQuery.resolveReferences,
      particularInterest: searchQuery.particularInterest,
    });
  }
}