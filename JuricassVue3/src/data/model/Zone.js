export class Zone {
  constructor(data = {}) {
    this.name = data?.name
    this.start = data?.start
    this.end = data?.end
  }
}
