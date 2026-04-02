export type Client = {
    id: string
    name: string
    zorgType: string
    lastVisit: string
    status: 'Open report' | 'View report'
}