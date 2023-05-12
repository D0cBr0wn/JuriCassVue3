import { Decision } from '@model/Decision'

export const createDecisionFixture = (zones = { introduction: [{ start: 0, end: 1495 }] }) => {
  return new Decision({
    id: 'decisionId',
    source: 'source',
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
    zones: zones
  })
}

export const createNoZonesDecisionFixture = () => createDecisionFixture(null)
