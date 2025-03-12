import { DecisionLink } from "../model/DecisionLink";

export class ApiDecisionLink {
  id?: string;
  url?: string;
  description?: string;
  theme?: string;
  number?: string;

  constructor(data: Partial<ApiDecisionLink> = {}) {
    this.id = data.id;
    this.url = data.url;
    this.description = data.description;
    this.theme = data.theme;
    this.number = data.number;
  }

  static adaptToApi(decisionLink: DecisionLink): ApiDecisionLink {
    return new ApiDecisionLink({
      id: decisionLink.id,
      url: decisionLink.url,
      description: decisionLink.description,
      theme: decisionLink.theme,
      number: decisionLink.number,
    });
  }
}
