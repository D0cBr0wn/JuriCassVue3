import { FileLink } from "../model/FileLink";

export class ApiFileLink {
  id?: string;
  url?: string;
  type?: string;
  label?: string;

  constructor(data: Partial<ApiFileLink> = {}) {
    this.id = data.id;
    this.url = data.url;
    this.type = data.type;
    this.label = data.label;
  }

  static adaptToApi(fileLink: FileLink): ApiFileLink {
    return new ApiFileLink({
      id: fileLink.id,
      url: fileLink.url,
      type: fileLink.type,
      label: fileLink.label,
    });
  }
}
