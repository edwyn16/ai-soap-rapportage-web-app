import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type ApprovalSummaryCardProps = {
  summary?: string
  reliability?: 'Hoog' | 'Middel' | 'Laag'
}

const reliabilityStyles = {
  Hoog: {
    backgroundColor: '#DCFCE7',
    textColor: '#166534',
  },
  Middel: {
    backgroundColor: '#FEF3C7',
    textColor: '#92400E',
  },
  Laag: {
    backgroundColor: '#FEE2E2',
    textColor: '#991B1B',
  },
}

const ApprovalSummaryCard = ({
  summary = 'Thuiszorgbezoek bij mevrouw Jansen. Patient rapporteert verhoogde vermoeidheid, duizeligheid en toenemende kniepijn. Bloeddruk licht verhoogd (145/90). Linkerknie gezwollen. Plan: monitoring bloeddruk, pijnstilling, en follow-up over 3 dagen.',
  reliability = 'Hoog',
}: ApprovalSummaryCardProps) => {
    const badgeStyle = reliabilityStyles[reliability]

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Ionicons name="sparkles-outline" size={18} color="#334155" />
                <Text style={styles.title}>AI samenvatting</Text>
            </View>

            <Text style={styles.summary}>{summary}</Text>

            <View style={styles.footer}>
                <Text style={styles.footerLabel}>AI betrouwbaarheid:</Text>

                <View style={[ styles.badge, { backgroundColor: badgeStyle.backgroundColor }, ]}>
                    <Text style={[styles.badgeText, { color: badgeStyle.textColor }]}>
                        {reliability}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ApprovalSummaryCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 16,
        paddingHorizontal: 14,
        paddingTop: 14,
        paddingBottom: 14,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    title: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Sora_600SemiBold',
        color: '#0F172A',
    },
    summary: {
        marginTop: 28,
        fontSize: 16,
        lineHeight: 30,
        fontFamily: 'Inter_400Regular',
        color: '#334155',
    },
    footer: {
        marginTop: 28,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
    },
    footerLabel: {
        fontSize: 15,
        lineHeight: 22,
        fontFamily: 'Inter_600SemiBold',
        color: '#475569',
    },
    badge: {
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    badgeText: {
        fontSize: 13,
        lineHeight: 18,
        fontFamily: 'Inter_500Medium',
    },
})