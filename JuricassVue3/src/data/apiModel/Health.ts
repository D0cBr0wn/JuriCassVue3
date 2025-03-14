import { Health as ModelHealth } from '../model/Health'

export class Health {
  status: string

  constructor(data: Partial<Health> = {}) {
    this.status = data?.status ?? ''
  }

  static adaptToApi(health: ModelHealth): Health {
    return new Health({
      status: health.status
    })
  }

  static adaptFromApi(apiHealth: Health): ModelHealth {
    return new ModelHealth({
      status: apiHealth.status
    })
  }
}
