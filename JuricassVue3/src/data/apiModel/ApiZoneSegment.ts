import { ZoneSegment } from "../model/ZoneSegment";

export class ApiZoneSegment {
  start: number;
  end: number;

  constructor(data: Partial<ApiZoneSegment> = {}) {
    this.start = data.start ?? 0;
    this.end = data.end ?? 0;
  }

  static adaptToApi(segment: ZoneSegment): ApiZoneSegment {
    return new ApiZoneSegment({
      start: segment.start,
      end: segment.end,
    });
  }

  static adaptFromApi(apiSegment: ApiZoneSegment): ZoneSegment {
    return new ZoneSegment({
      start: apiSegment.start,
      end: apiSegment.end,
    });
  }
}