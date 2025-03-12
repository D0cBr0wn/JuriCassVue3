import { ApiZone } from "../apiModel/ApiZone";
import { ZoneSegment } from "./ZoneSegment";

export class Zone {
  introduction?: ZoneSegment[];
  expose?: ZoneSegment[];
  moyens?: ZoneSegment[];
  motivations?: ZoneSegment[];
  dispositif?: ZoneSegment[];
  annexes?: ZoneSegment[];

  constructor(data: Partial<Zone> = {}) {
    this.introduction = data.introduction ?? [];
    this.expose = data.expose ?? [];
    this.moyens = data.moyens ?? [];
    this.motivations = data.motivations ?? [];
    this.dispositif = data.dispositif ?? [];
    this.annexes = data.annexes ?? [];
  }
  static adaptFromApi(apiZone: ApiZone): Zone {
    return new Zone({
      introduction: apiZone.introduction?.map(
        (segment) => new ZoneSegment(segment)
      ),
      expose: apiZone.expose?.map((segment) => new ZoneSegment(segment)),
      moyens: apiZone.moyens?.map((segment) => new ZoneSegment(segment)),
      motivations: apiZone.motivations?.map(
        (segment) => new ZoneSegment(segment)
      ),
      dispositif: apiZone.dispositif?.map((segment) => new ZoneSegment(segment)),
      annexes: apiZone.annexes?.map((segment) => new ZoneSegment(segment)),
    });
  }
}