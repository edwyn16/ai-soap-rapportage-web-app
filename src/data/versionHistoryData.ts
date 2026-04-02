export type VersionHistoryItem = {
    id: string
    title: string
    date: string
    description?: string
    isMuted?: boolean
}

export type VersionHistoryCardData = {
    title: string
    items: VersionHistoryItem[]
}

export const versionHistoryData: VersionHistoryCardData = {
    title: 'Vorige versies & wijzigingen',
    items: [
        {
        id: 'current-version',
        title: 'Huidige versie (AI gegenereerd)',
        date: '24 maart 2026, 14:23',
        description: 'Automatisch gegenereerd op basis van audio-opname',
        },
        {
        id: 'audio-input',
        title: 'Audio-opname opgeslagen',
        date: '24 maart 2026, 14:20',
        description: 'Duur: 2:34 min',
        },
        {
        id: 'older-changes',
        title: '[Eerdere wijzigingen worden hier getoond]',
        date: '',
        isMuted: true,
        },
    ],
}