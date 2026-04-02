import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Report } from '@/src/types/report'

type RecentReportCardProps = {
    item: Report
    onPress: () => void
}

const RecentReportCard = ({ item, onPress }: RecentReportCardProps) => {
    const isApproved = item.status === 'Approved'

    return (
        <View style={styles.card}>
        <View style={styles.topRow}>
            <View style={styles.titleBlock}>
            <View style={styles.titleRow}>
                <Ionicons name="document-text-outline" size={16} color="#253246" />
                <Text style={styles.title}>{item.title}</Text>
            </View>

            <View style={styles.metaRow}>
                <Ionicons name="calendar-outline" size={14} color="#6B7280" />
                <Text style={styles.metaText}>{item.date}</Text>

                <Text style={styles.metaDivider}>•</Text>

                <Ionicons name="time-outline" size={14} color="#6B7280" />
                <Text style={styles.metaText}>{item.time}</Text>
            </View>
            </View>

            <View style={[ styles.statusBadge, isApproved ? styles.approvedBadge : styles.pendingBadge, ]}>
                <Text style={[ styles.statusText, isApproved ? styles.approvedText : styles.pendingText, ]}>
                    {item.status}
                </Text>
            </View>
        </View>

            <Pressable style={styles.button} onPress={onPress}>
                <Ionicons name="eye-outline" size={18} color="#FFFFFF" />
                <Text style={styles.buttonText}> View Report </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#AAB2BD',
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 14,
        paddingTop: 14,
        paddingBottom: 12,
    },
    topRow: {
        marginBottom: 14,
    },
    titleBlock: {
        marginBottom: 10,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: '700',
        color: '#253246',
        flexShrink: 1,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    metaText: {
        marginLeft: 4,
        fontSize: 13,
        color: '#6B7280',
    },
    metaDivider: {
        marginHorizontal: 8,
        fontSize: 13,
        color: '#9CA3AF',
    },
    statusBadge: {
        alignSelf: 'flex-start',
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    approvedBadge: {
        backgroundColor: '#DCFCE7',
    },
    pendingBadge: {
        backgroundColor: '#FEF3C7',
    },
    statusText: {
        fontSize: 12,
        fontWeight: '700',
    },
    approvedText: {
        color: '#15803D',
    },
    pendingText: {
        color: '#B45309',
    },
    button: {
        height: 40,
        backgroundColor: '#1F2C40',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#FFFFFF',
    },
})

export default RecentReportCard