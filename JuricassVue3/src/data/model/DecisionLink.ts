import { ApiDecisionLink } from "../apiModel/ApiDecisionLink";


export class DecisionLink {
  id?: string;
  url?: string;
  description?: string;
  theme?: string;
  number?: string;

  constructor(data: Partial<DecisionLink> = {}) {
    this.id = data.id;
    this.url = data.url;
    this.description = data.description;
    this.theme = data.theme;
    this.number = data.number;
  }

  static adaptFromApi(apiDecisionLink: ApiDecisionLink): DecisionLink {
    return new DecisionLink({
      id: apiDecisionLink.id,
      url: apiDecisionLink.url,
      description: apiDecisionLink.description,
      theme: apiDecisionLink.theme,
      number: apiDecisionLink.number,
    });
  }
}
