import { ApiZoneSegment } from "../apiModel/ApiZoneSegment";

export class ZoneSegment {
  start: number;
  end: number;

  constructor(data: Partial<ZoneSegment> = {}) {
    this.start = data.start ?? 0;
    this.end = data.end ?? 0;
  }

  static adaptToApi(segment: ZoneSegment): ApiZoneSegment {
    return ApiZoneSegment.adaptToApi(segment);
  }

  static adaptFromApi(apiSegment: ApiZoneSegment): ZoneSegment {
    return ApiZoneSegment.adaptFromApi(apiSegment);
  }
}
