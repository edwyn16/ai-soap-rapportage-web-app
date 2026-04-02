export type AiSuggestionStatus =
    | 'Wacht op goedkeuring'
    | 'Goedgekeurd'
    | 'Correctie nodig'

export type AiAssistantSuggestion = {
    createdAt: string
    subjective: string
    objective: string
    assessment: string
    status: AiSuggestionStatus
}

export const aiAssistantSuggestion: AiAssistantSuggestion = {
    createdAt: '20 mrt 2026, 14:45',
    subjective: 'Cliënt rapporteert lichte pijn bij linkervoet',
    objective: 'Wond ter grootte van 2cm geobserveerd, lichte roodheid zichtbaar',
    assessment: 'Mogelijk begin infectie, monitoring vereist',
    status: 'Wacht op goedkeuring',
}