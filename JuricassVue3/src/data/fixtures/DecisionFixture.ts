import { Decision } from '../model/Decision'
import { Zone } from '../model/Zone'
import { ZoneSegment } from '../model/ZoneSegment'

interface ZoneFixture {
  introduction?: ZoneSegment[]
}

const defaultZones: ZoneFixture = {
  introduction: [{ start: 0, end: 1495 }]
}

export const createDecisionFixture = (zones: ZoneFixture | undefined = defaultZones): Decision => {
  return new Decision({
    id: 'decisionId',
    text: 'loremipsum text',
    jurisdiction: 'cc',
    chamber: 'chamber',
    number: '3456787654',
    numbers: ['567876', '567898767'],
    publication: ['publi-567876', 'publi-567898767'],
    decisionDate: '2023-02-28',
    type: 'type',
    solution: 'rejet',
    summary: 'summary',
    themes: ['theme-567876', 'theme-567898767'],
    partial: false,
    zones: zones as Zone
  })
}

export const createNoZonesDecisionFixture = (): Decision => createDecisionFixture(undefined)
