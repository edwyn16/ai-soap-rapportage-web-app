import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const ApprovalHeader = () => {
    const router = useRouter()
    const { clientId, reportId } = useLocalSearchParams<{ clientId: string, reportId: string }>()

    const handleBack = () => {
        if (!clientId || !reportId) return
        router.push(`/clients/${clientId}/reports/${reportId}`)
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {/* Back button */}
                <TouchableOpacity onPress={handleBack} style={styles.backButton} activeOpacity={0.7}>
                    <Ionicons name="chevron-back" size={20} color="#0F172A" />
                </TouchableOpacity>

                {/* Title + subtitle */}
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Rapportage controleren</Text>
                    <Text style={styles.subtitle}>
                        Mevrouw Jansen • 24 mrt 14:32
                </Text>
            </View>

                {/* Status badge */}
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>Concept</Text>
                </View>
            </View>
        </View>
    )
}

export default ApprovalHeader

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F8FAFC',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 12,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    backButton: {
        width: 36,
        height: 36,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginRight: 10,
    },
    textWrapper: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Sora_600SemiBold',
        color: '#0F172A',
    },
    subtitle: {
        fontSize: 13,
        fontFamily: 'Inter_400Regular',
        color: '#64748B',
        marginTop: 2,
    },
    badge: {
        backgroundColor: '#E2E8F0',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
    },
    badgeText: {
        fontSize: 12,
        fontFamily: 'Inter_500Medium',
        color: '#0F172A',
    },
})