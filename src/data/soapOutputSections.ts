export type SoapOutputSectionItem = {
  id: string
  letter: 'S' | 'O' | 'A' | 'P'
  title: string
  content: string
  badgeText?: string
  confidenceText?: string
}

export const soapOutputSections: SoapOutputSectionItem[] = [
    {
        id: 's',
        letter: 'S',
        title: 'Subjectief',
        badgeText: 'AI voorstel',
        content: 'Cliënt geeft aan zich vandaag vermoeider te voelen dan gebruikelijk. Ze meldt hoofdpijn aan de rechterkant en lichte duizeligheid bij opstaan. Slaap was onrustig afgelopen nacht. Eetlust is verminderd.',
    },
    {
        id: 'o',
        letter: 'O',
        title: 'Objectief',
        badgeText: 'AI voorstel',
        content: '• Bloeddruk: 145/90 mmHg (licht verhoogd t.o.v. vorige meting)\n• Hartslag: 78 bpm (regulair)\n• Temperatuur: 36.8°C\n• Cliënt oogt bleek, vermoeide gelaatsuitdrukking\n• Medicatie: volgens schema ingenomen',
    },
    {
        id: 'a',
        letter: 'A',
        title: 'Analyse',
        badgeText: 'AI voorstel',
        confidenceText: 'Zekerheid: 78%',
        content: 'Mogelijk verband tussen verhoogde bloeddruk en gerapporteerde hoofdpijn. Verminderde eetlust en slaapproblemen kunnen bijdragen aan algemene vermoeidheid. Gezien de anamnese van cliënt is extra observatie aangewezen.',
    },
    {
        id: 'p',
        letter: 'P',
        title: 'Plan',
        badgeText: 'AI voorstel',
        content: '• Bloeddruk extra monitoren: 2x daags meten komende 3 dagen\n• Huisarts informeren indien bloeddruk boven 150/95 blijft\n• Voldoende vochtinname stimuleren (minimaal 1,5L per dag)\n• Kleine, regelmatige maaltijden aanbieden i.v.m. verminderde eetlust\n• Controle-afspraak plannen over 2 dagen',
    },

]