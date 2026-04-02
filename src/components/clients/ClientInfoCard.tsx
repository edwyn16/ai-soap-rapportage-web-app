import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import type { ClientDetail } from '@/src/data/clientDetails'

type ClientInfoCardProps = {
  client: ClientDetail
}

const ClientInfoCard = ({ client }: ClientInfoCardProps) => {
    const getCareLevelStyle = () => {
        switch (client.careLevel.toLowerCase()) {
        case 'level 5':
        case 'level 4':
            return {
            badge: styles.careLevelBadgeHigh,
            text: styles.careLevelTextHigh,
            iconColor: '#B91C1C',
            }
        case 'level 3':
            return {
            badge: styles.careLevelBadgeMedium,
            text: styles.careLevelTextMedium,
            iconColor: '#B45309',
            }
        default:
            return {
            badge: styles.careLevelBadgeLow,
            text: styles.careLevelTextLow,
            iconColor: '#15803D',
            }
        }
    }

    const careLevelStyle = getCareLevelStyle()

    return (
        <View style={styles.card}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Client Overview</Text>
            </View>

            <View style={styles.infoBlock}>
                <View style={styles.rowHeader}>
                    <Ionicons name="location-outline" size={16} color="#6B7280" />
                    <Text style={styles.label}>Address</Text>
                </View>
                <Text style={styles.value}>{client.address}</Text>
            </View>

            <View style={styles.infoBlock}>
                <View style={styles.rowHeader}>
                    <Ionicons name="call-outline" size={16} color="#6B7280" />
                    <Text style={styles.label}>Phone Number</Text>
                </View>
                <Text style={styles.value}>{client.phoneNumber}</Text>
            </View>

            <View style={styles.infoBlock}>
                <View style={styles.rowHeader}>
                    <Ionicons name="medkit-outline" size={16} color="#6B7280" />
                    <Text style={styles.label}>Diagnosis</Text>
                </View>
                <Text style={styles.value}>{client.diagnosis}</Text>
            </View>

            <View style={styles.infoBlock}>
                <View style={styles.rowHeader}>
                    <Ionicons
                        name="shield-checkmark-outline"
                        size={16}
                        color={careLevelStyle.iconColor}
                    />
                    <Text style={styles.label}>Care Level</Text>
                </View>

                <View style={[styles.careLevelBadgeBase, careLevelStyle.badge]}>
                    <Text style={[styles.careLevelBadgeTextBase, careLevelStyle.text]}>
                        {client.careLevel}
                    </Text>
                </View>
            </View>

            <View style={styles.caregiverBlock}>
                <View style={styles.rowHeader}>
                    <Ionicons name="people-outline" size={16} color="#6B7280" />
                    <Text style={styles.label}>Assigned Caregivers</Text>
                </View>
                <Text style={styles.value}>{client.assignedCaregivers.join(', ')}</Text>
            </View>
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
        paddingBottom: 14,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },
    sectionHeaderIconWrap: {
        width: 26,
        height: 26,
        borderWidth: 1,
        borderColor: '#D5DAE1',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#253246',
    },
    infoBlock: {
        borderWidth: 1,
        borderColor: '#D5DAE1',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 10,
    },
    caregiverBlock: {
        paddingTop: 4,
    },
    rowHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    label: {
        marginLeft: 6,
        fontSize: 12,
        fontWeight: '700',
        color: '#6B7280',
        textTransform: 'uppercase',
        letterSpacing: 0.4,
    },
    value: {
        fontSize: 15,
        color: '#253246',
        fontWeight: '500',
        lineHeight: 21,
    },
    careLevelBadgeBase: {
        alignSelf: 'flex-start',
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    careLevelBadgeTextBase: {
        fontSize: 13,
        fontWeight: '700',
    },
    careLevelBadgeHigh: {
        backgroundColor: '#FEE2E2',
    },
    careLevelTextHigh: {
        color: '#B91C1C',
    },
    careLevelBadgeMedium: {
        backgroundColor: '#FEF3C7',
    },
    careLevelTextMedium: {
        color: '#B45309',
    },
    careLevelBadgeLow: {
        backgroundColor: '#DCFCE7',
    },
    careLevelTextLow: {
        color: '#15803D',
    },
})

export default ClientInfoCard