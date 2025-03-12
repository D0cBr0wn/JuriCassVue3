import { TextLink } from "../model/TextLink";


export class ApiTextLink {
  id?: string;
  url?: string;
  title?: string;

  constructor(data: Partial<ApiTextLink> = {}) {
    this.id = data.id;
    this.url = data.url;
    this.title = data.title;
  }

  static adaptToApi(textLink: TextLink): ApiTextLink {
    return new ApiTextLink({
      id: textLink.id,
      url: textLink.url,
      title: textLink.title,
    });
  }
}
