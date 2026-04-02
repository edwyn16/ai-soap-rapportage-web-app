export type VisitHistoryStatus = 'Approved' | 'Pending'
export type ClientStatus = 'Stabiel' | 'Kritisch'

export type VisitHistoryItem = {
  id: string
  title: string
  date: string
  time: string
  status: VisitHistoryStatus
}

export type ClientDetail = {
  id: string
  clientCode: string
  name: string
  age: number
  status: ClientStatus
  gender: string
  address: string
  phoneNumber: string
  diagnosis: string
  careLevel: string
  assignedCaregivers: string[]
  careType: string
  nextVisit: string
  summary: string
  visitHistory: VisitHistoryItem[]
}

export const clientDetails: ClientDetail[] = [
    {
        id: '1',
        clientCode: 'CLT-2024-0847',
        name: 'Margaret Thompson',
        age: 82,
        status: 'Stabiel',
        gender: 'Female',
        address: '14 Greenfield Road',
        phoneNumber: '(010) 123-4567',
        diagnosis: 'Arthritis and reduced mobility',
        careLevel: 'Level 3',
        assignedCaregivers: ['Emma Johnson', 'Daniel Smith'],
        careType: 'Personal Care',
        nextVisit: 'Today, 4:00 PM',
        summary: 'Client requires assistance with daily personal care and medication reminders.',
        visitHistory: [
            {
                id: '101',
                title: 'Morning Care Report',
                date: 'Mar 25, 2026',
                time: '9:30 AM',
                status: 'Approved',
            },
            {
                id: '102',
                title: 'Follow-up Care Report',
                date: 'Mar 24, 2026',
                time: '10:00 AM',
                status: 'Pending',
            },
        ],
    },
    {
        id: '2',
        clientCode: 'CLT-2024-0848',
        name: 'Robert Anderson',
        age: 76,
        status: 'Kritisch',
        gender: 'Male',
        address: '8 Willow Avenue',
        phoneNumber: '(010) 234-5678',
        diagnosis: 'Chronic wound care and limited mobility',
        careLevel: 'Level 4',
        assignedCaregivers: ['Sophia Miller', 'Liam Carter'],
        careType: 'Nursing Care',
        nextVisit: 'Today, 5:00 PM',
        summary: 'Client is under observation for mobility support and wound care follow-up.',
        visitHistory: [
            {
                id: '201',
                title: 'Wound Care Review',
                date: 'Mar 25, 2026',
                time: '11:00 AM',
                status: 'Pending',
            },
            {
                id: '202',
                title: 'Medication Check',
                date: 'Mar 23, 2026',
                time: '2:15 PM',
                status: 'Approved',
            },
        ],
    },
    {
        id: '3',
        clientCode: 'CLT-2024-0849',
        name: 'Sarah Mitchell',
        age: 79,
        status: 'Stabiel',
        gender: 'Female',
        address: '22 Maple Street',
        phoneNumber: '(010) 345-6789',
        diagnosis: 'Mild dementia and fall risk',
        careLevel: 'Level 2',
        assignedCaregivers: ['Olivia Walker', 'Noah Harris'],
        careType: 'Personal Care',
        nextVisit: 'Tomorrow, 10:00 AM',
        summary: 'Client needs support with mobility and light household assistance.',
        visitHistory: [
            {
                id: '301',
                title: 'Mobility Assistance',
                date: 'Mar 25, 2026',
                time: '10:30 AM',
                status: 'Approved',
            },
            {
                id: '302',
                title: 'Daily Check-up',
                date: 'Mar 24, 2026',
                time: '9:45 AM',
                status: 'Pending',
            },
        ],
    },
    {
        id: '4',
        clientCode: 'CLT-2024-0850',
        name: 'Patricia Brown',
        age: 85,
        status: 'Kritisch',
        gender: 'Female',
        address: '5 Oakwood Drive',
        phoneNumber: '(010) 456-7890',
        diagnosis: 'Heart failure and intensive monitoring',
        careLevel: 'Level 5',
        assignedCaregivers: ['Ava Wilson', 'James Moore'],
        careType: 'Nursing Care',
        nextVisit: 'Today, 6:00 PM',
        summary: 'Client requires intensive nursing care and frequent monitoring.',
        visitHistory: [
            {
                id: '401',
                title: 'Vital Signs Monitoring',
                date: 'Mar 25, 2026',
                time: '12:00 PM',
                status: 'Pending',
            },
            {
                id: '402',
                title: 'Medication Administration',
                date: 'Mar 23, 2026',
                time: '3:30 PM',
                status: 'Approved',
            },
        ],
    },
    {
        id: '5',
        clientCode: 'CLT-2024-0851',
        name: 'Michael Davis',
        age: 73,
        status: 'Stabiel',
        gender: 'Male',
        address: '9 Cedar Lane',
        phoneNumber: '(010) 567-8901',
        diagnosis: 'Post-surgery rehabilitation',
        careLevel: 'Level 2',
        assignedCaregivers: ['Charlotte White', 'Benjamin Young'],
        careType: 'Rehabilitation',
        nextVisit: 'Today, 2:00 PM',
        summary: 'Client is recovering from surgery and undergoing physical rehabilitation.',
        visitHistory: [
            {
                id: '501',
                title: 'Physiotherapy Session',
                date: 'Mar 25, 2026',
                time: '2:15 PM',
                status: 'Approved',
            },
            {
                id: '502',
                title: 'Progress Evaluation',
                date: 'Mar 22, 2026',
                time: '11:00 AM',
                status: 'Approved',
            },
        ],
    },
    {
        id: '6',
        clientCode: 'CLT-2024-0852',
        name: 'Linda Martinez',
        age: 81,
        status: 'Kritisch',
        gender: 'Female',
        address: '18 Birch Avenue',
        phoneNumber: '(010) 678-9012',
        diagnosis: 'Diabetes complications and hypertension',
        careLevel: 'Level 4',
        assignedCaregivers: ['Mia King', 'Elijah Scott'],
        careType: 'Nursing Care',
        nextVisit: 'Today, 3:30 PM',
        summary:
        'Client requires close supervision due to chronic health conditions.',
        visitHistory: [
            {
                id: '601',
                title: 'Health Monitoring',
                date: 'Mar 25, 2026',
                time: '1:00 PM',
                status: 'Pending',
            },
            {
                id: '602',
                title: 'Medication Review',
                date: 'Mar 24, 2026',
                time: '10:30 AM',
                status: 'Approved',
            },
        ],
    },
    {
        id: '7',
        clientCode: 'CLT-2024-0853',
        name: 'David Garcia',
        age: 77,
        status: 'Stabiel',
        gender: 'Male',
        address: '30 Pine Street',
        phoneNumber: '(010) 789-0123',
        diagnosis: 'Reduced self-care capacity',
        careLevel: 'Level 2',
        assignedCaregivers: ['Harper Adams', 'Lucas Baker'],
        careType: 'Personal Care',
        nextVisit: 'Tomorrow, 9:00 AM',
        summary:
        'Client needs assistance with daily routines and meal preparation.',
        visitHistory: [
            {
                id: '701',
                title: 'Morning Routine Assistance',
                date: 'Mar 25, 2026',
                time: '9:00 AM',
                status: 'Approved',
            },
            {
                id: '702',
                title: 'Nutrition Check',
                date: 'Mar 23, 2026',
                time: '8:30 AM',
                status: 'Pending',
            },
        ],
    },
]