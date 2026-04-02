export type OmahaItem = {
  id: string
  domain: string
  problem: string
  intervention: string
}

export const omahaItems: OmahaItem[] = [
  {
    id: '1',
    domain: 'Fysiologisch',
    problem: 'Huid (wondverzorging)',
    intervention: 'Surveillance (controle), behandeling en procedures',
  },
  {
    id: '2',
    domain: 'Gedragsmatig',
    problem: 'Voeding (diabetes management)',
    intervention: 'Begeleiding, educatie',
  },
  {
    id: '3',
    domain: 'Fysiologisch',
    problem: 'Mobiliteit (valpreventie)',
    intervention: 'Surveillance, oefeningen, aanpassing omgeving',
  },
]

export const carePlanActions: string[] = [
  'Dagelijkse controle bloedsuiker',
  'Toezicht op medicatie-inname',
  'Stimuleren van mobiliteitsoefeningen',
]