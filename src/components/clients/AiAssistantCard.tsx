import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import type { AiAssistantSuggestion, AiSuggestionStatus } from '@/src/data/aiAssistantData'

type AiAssistantCardProps = {
  suggestion: AiAssistantSuggestion
  onStartNewReport: () => void
}

const statusMap: Record<
  AiSuggestionStatus,
  {
    badgeBackground: string
    badgeBorder: string
    textColor: string
    iconColor: string
  }
> = {
  'Wacht op goedkeuring': {
    badgeBackground: '#FEF3C7',
    badgeBorder: '#FACC15',
    textColor: '#92400E',
    iconColor: '#B45309',
  },
  Goedgekeurd: {
    badgeBackground: '#DCFCE7',
    badgeBorder: '#22C55E',
    textColor: '#166534',
    iconColor: '#16A34A',
  },
  'Correctie nodig': {
    badgeBackground: '#FEE2E2',
    badgeBorder: '#EF4444',
    textColor: '#991B1B',
    iconColor: '#DC2626',
  },
}

const AiAssistantCard = ({ suggestion, onStartNewReport, }: AiAssistantCardProps) => {
    const currentStatus = statusMap[suggestion.status]

    return (
        <View style={styles.card}>
            <Text style={styles.title}>AI Assistent</Text>

            <View style={styles.divider} />

            <Pressable onPress={onStartNewReport} style={({ pressed }) => [ styles.primaryButton, pressed && styles.primaryButtonPressed, ]}>
                <Feather name="mic" size={16} color="#FFFFFF" />
                <Text style={styles.primaryButtonText}>
                    Start nieuw AI rapport (spraak invoer)
                </Text>
            </Pressable>

            <View style={styles.suggestionPanel}>
                <View style={styles.suggestionHeader}>
                    <MaterialCommunityIcons name="star-four-points-outline" size={18} color="#667085" />

                    <View style={styles.suggestionHeaderText}>
                        <Text style={styles.suggestionTitle}>Laatste AI suggestie</Text>
                        <Text style={styles.createdAt}>
                            Aangemaakt: {suggestion.createdAt}
                        </Text>
                    </View>
                </View>

                <View style={styles.soapBox}>
                    <Text style={styles.soapText}>
                        <Text style={styles.soapLabel}>S: </Text>
                        {suggestion.subjective}
                    </Text>

                    <Text style={styles.soapText}>
                        <Text style={styles.soapLabel}>O: </Text>
                        {suggestion.objective}
                    </Text>

                    <Text style={styles.soapText}>
                        <Text style={styles.soapLabel}>A: </Text>
                        {suggestion.assessment}
                    </Text>
                </View>

                <View style={[ styles.statusBadge, { backgroundColor: currentStatus.badgeBackground, borderColor: currentStatus.badgeBorder, }, ]}>
                    <Feather name="clock" size={12} color={currentStatus.iconColor} />
                    <Text style={[ styles.statusText, { color: currentStatus.textColor, }, ]} >
                        {suggestion.status}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F9FAFB',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827',
    },
    divider: {
        height: 1,
        backgroundColor: '#D1D5DB',
        marginTop: 12,
        marginBottom: 14,
    },
    primaryButton: {
        minHeight: 48,
        borderRadius: 8,
        backgroundColor: '#1F2937',
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    primaryButtonPressed: {
        opacity: 0.9,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        flexShrink: 1,
    },
    suggestionPanel: {
        marginTop: 14,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        backgroundColor: '#F3F4F6',
        padding: 14,
    },
    suggestionHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    suggestionHeaderText: {
        flex: 1,
        marginLeft: 10,
    },
    suggestionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#111827',
    },
    createdAt: {
        marginTop: 2,
        fontSize: 12,
        color: '#4B5563',
    },
    soapBox: {
        marginTop: 14,
        borderWidth: 1,
        borderColor: '#C7CDD4',
        backgroundColor: '#F9FAFB',
        padding: 12,
        gap: 10,
    },
    soapText: {
        fontSize: 15,
        lineHeight: 26,
        color: '#374151',
    },
    soapLabel: {
        fontWeight: '700',
        color: '#253246',
    },
    statusBadge: {
        marginTop: 14,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        borderWidth: 1,
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    statusText: {
        fontSize: 13,
        fontWeight: '500',
    },
})

export default AiAssistantCard