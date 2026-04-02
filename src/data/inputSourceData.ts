export type InputSourceItem = {
    id: string
    title: string
    duration: string
    transcript: string
    isExpanded?: boolean
}

export const InputSourceData: InputSourceItem[] = [
    {
        id: 'original-input',
        title: 'Oorspronkelijke input',
        duration: '2:34 min',
        transcript:
        '"Mevrouw de Jong zegt dat ze zich moe voelt vandaag, ze heeft hoofdpijn rechts en voelt zich een beetje duizelig als ze opstaat. Ze heeft slecht geslapen vannacht..."',
        isExpanded: true,
    },
]