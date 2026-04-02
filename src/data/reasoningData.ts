export type ReasoningCardData = {
    id: string
    title: string
    paragraphs: string[]
}

export const reasoningData: ReasoningCardData = {
    id: 'reasoning-1',
    title: 'Waarom dit voorstel?',
    paragraphs: [
        'De AI heeft verbanden gelegd tussen de subjectieve klachten en objectieve metingen.',
        'Op basis van het cliëntprofiel (hypertensie, leeftijd) zijn preventieve maatregelen voorgesteld.',
    ],
}