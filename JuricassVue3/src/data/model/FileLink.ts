import { ApiFileLink } from "../apiModel/ApiFileLink";

export class FileLink {
  id?: string;
  url?: string;
  type?: string;
  label?: string;

  constructor(data: Partial<FileLink> = {}) {
    this.id = data.id;
    this.url = data.url;
    this.type = data.type;
    this.label = data.label;
  }

  static adaptFromApi(apiFileLink: ApiFileLink): FileLink {
    return new FileLink({
      id: apiFileLink.id,
      url: apiFileLink.url,
      type: apiFileLink.type,
      label: apiFileLink.label,
    });
  }
}