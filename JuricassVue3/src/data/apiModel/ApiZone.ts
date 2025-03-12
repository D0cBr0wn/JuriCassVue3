import { Zone } from "../model/Zone";
import { ApiZoneSegment } from "./ApiZoneSegment";

export class ApiZone {
  introduction?: ApiZoneSegment[];
  expose?: ApiZoneSegment[];
  moyens?: ApiZoneSegment[];
  motivations?: ApiZoneSegment[];
  dispositif?: ApiZoneSegment[];
  annexes?: ApiZoneSegment[];

  constructor(data: Partial<ApiZone> = {}) {
    this.introduction = data.introduction?.map(ApiZoneSegment.adaptFromApi);
    this.expose = data.expose?.map(ApiZoneSegment.adaptFromApi);
    this.moyens = data.moyens?.map(ApiZoneSegment.adaptFromApi);
    this.motivations = data.motivations?.map(ApiZoneSegment.adaptFromApi);
    this.dispositif = data.dispositif?.map(ApiZoneSegment.adaptFromApi);
    this.annexes = data.annexes?.map(ApiZoneSegment.adaptFromApi);
  }

  static adaptToApi(zone: Zone): ApiZone {
    return new ApiZone({
      introduction: zone.introduction?.map(e => ApiZoneSegment.adaptToApi(e)),
      expose: zone.expose?.map(e => ApiZoneSegment.adaptToApi(e)),
      moyens: zone.moyens?.map(e => ApiZoneSegment.adaptToApi(e)),
      motivations: zone.motivations?.map(e => ApiZoneSegment.adaptToApi(e)),
      dispositif: zone.dispositif?.map(e => ApiZoneSegment.adaptToApi(e)),
      annexes: zone.annexes?.map(e => ApiZoneSegment.adaptToApi(e)),
    });
  }
}