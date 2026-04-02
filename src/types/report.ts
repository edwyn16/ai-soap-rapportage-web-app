export type ReportStatus = 'Approved' | 'Pending'

export type Report = {
    id: string
    clientId: string
    date: string
    time: string
    title: string
    status: ReportStatus
}