export type ApprovalSoapSection = {
  id: string
  letter: 'S' | 'O' | 'A' | 'P'
  title: string
  subtitle: string
  content: string
}

export const approvalSoapSections: ApprovalSoapSection[] = [
  {
    id: 'subjective',
    letter: 'S',
    title: 'Subjectief',
    subtitle: 'AI gegenereerd',
    content:
      'Patiënt geeft aan zich vermoeider te voelen en meldt duizeligheid bij opstaan. Daarnaast sprake van toenemende pijn in de linkerknie.',
  },
  {
    id: 'objective',
    letter: 'O',
    title: 'Objectief',
    subtitle: 'AI gegenereerd',
    content:
      'Bloeddruk gemeten op 145/90. Linkerknie is licht gezwollen. Patiënt beweegt voorzichtig tijdens mobilisatie.',
  },
  {
    id: 'analysis',
    letter: 'A',
    title: 'Analyse',
    subtitle: 'AI gegenereerd',
    content:
      'Klachten lijken invloed te hebben op mobiliteit en algemeen comfort. Verdere observatie en opvolging zijn wenselijk.',
  },
  {
    id: 'plan',
    letter: 'P',
    title: 'Plan',
    subtitle: 'AI gegenereerd',
    content:
      'Bloeddruk blijven monitoren, pijnstilling voortzetten volgens voorschrift en evaluatie over drie dagen uitvoeren.',
  },
]