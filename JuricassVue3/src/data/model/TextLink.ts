import { ApiTextLink } from "../apiModel/ApiTextLink";


export class TextLink {
  id?: string;
  url?: string;
  title?: string;

  constructor(data: Partial<TextLink> = {}) {
    this.id = data.id;
    this.url = data.url;
    this.title = data.title;
  }

  static adaptFromApi(apiTextLink: ApiTextLink): TextLink {
    return new TextLink({
      id: apiTextLink.id,
      url: apiTextLink.url,
      title: apiTextLink.title,
    });
  }
}

