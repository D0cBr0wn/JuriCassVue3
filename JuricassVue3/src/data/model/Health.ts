export class Health {
  status: string

  constructor(data: Partial<Health> = {}) {
    this.status = data?.status ?? ''
  }
}
