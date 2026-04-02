export type WarningNoteType = 'medication' | 'fallRisk' | 'internalNote'

export type WarningNoteItem = {
  id: string
  type: WarningNoteType
  title: string
  message: string
  author?: string
  date?: string
}

export const warningsNotesData: WarningNoteItem[] = [
  {
    id: '1',
    type: 'medication',
    title: 'Medicatie Waarschuwing',
    message: 'Insuline moet elke ochtend om 08:00 toegediend worden. Niet op lege maag.',
  },
  {
    id: '2',
    type: 'fallRisk',
    title: 'Valrisico',
    message: 'Cliënt heeft verhoogd valrisico. Let op losse tapijten, gebruik loophulpmiddel.',
  },
  {
    id: '3',
    type: 'internalNote',
    title: 'Interne Notitie',
    message: 'Dochter komt elke vrijdag langs voor ondersteuning. Familie is goed bereikbaar.',
    author: 'Petra',
    date: '15 mrt 2026',
  },
  {
    id: '4',
    type: 'internalNote',
    title: 'Interne Notitie',
    message: 'Voorkeur voor bezoek in ochtenduren. Cliënt is alert en coöperatief.',
    author: 'Jan',
    date: '10 mrt 2026',
  },
]