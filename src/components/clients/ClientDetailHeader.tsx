import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Pressable, StyleSheet, Text, View } from "react-native"

type ClientDetailHeaderProps = {
    name: string
    age: number
    status: 'Stabiel' | 'Kritisch'
    clientCode: string
}

const ClientDetailHeader = ({ name, age, status, clientCode }: ClientDetailHeaderProps) => {
    const router = useRouter()
    const isStable = status === 'Stabiel'
    
    return (
        <View style={styles.wrapper}>
            <View style={styles.topRow}>
                <Pressable style={styles.backButton} onPress={() => router.push('/')}>
                    <Ionicons name="arrow-back" size={20} color="#253246" />
                </Pressable>
            </View>

            <View style={styles.profileRow}>
                <View style={styles.avatarBox}>
                    <Ionicons name="person-outline" size={26} color="#6B7280" />
                </View>

                <View style={styles.infoContent}>
                    <Text style={styles.name}> {name} </Text>

                    <View style={styles.badgeRow}>
                        <View style={styles.ageBadge}>
                            <Text style={styles.ageBadgeText}> {age} jaar </Text>
                        </View>

                        <View style={[styles.statusBadge, isStable ? styles.stableBadge : styles.criticalBadge]}>
                            <Ionicons name={isStable ? 'checkmark-circle-outline' : 'alert-circle-outline'} />
                            <Text style={[styles.statusBadgeText, isStable ? styles.stableBadgeText : styles.criticalBadgeText]}> {status} </Text>
                        </View>
                    </View>

                    <Text style={styles.clientIdText}> Client ID: {clientCode} </Text>
                </View>
            </View>

            <View style={styles.actionsColumn}>
                <Pressable style={styles.actionButton}>
                    <Ionicons name="document-text-outline" size={18} color="#253246" />
                    <Text style={styles.actionButtonText}> New Report </Text>
                </Pressable>
                <Pressable style={styles.actionButton}>
                    <Ionicons name="time-outline" size={18} color="#253246" />
                    <Text> History </Text>
                </Pressable>
                <Pressable style={styles.actionButton}>
                    <Ionicons name="chatbubble-outline" size={18} color="#253246" />
                    <Text style={styles.actionButtonText}> Contact </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 16,
        paddingTop: 14,
        paddingBottom: 16,
        backgroundColor: '#F3F4F6',
    },
    topRow: {
        marginBottom: 12,
    },
    backButton: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#AAB2BD',
        backgroundColor: '#DDE1E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    avatarBox: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#AAB2BD',
        backgroundColor: '#DDE1E6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    infoContent: {
        flex: 1,
        paddingTop: 2,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 8,
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    ageBadge: {
        borderWidth: 1,
        borderColor: '#AAB2BD',
        backgroundColor: '#F8F8F8',
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginRight: 8,
    },
    ageBadgeText: {
        fontSize: 12,
        color: '#374151',
        fontWeight: '500',
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    stableBadge: {
        backgroundColor: '#DCFCE7',
    },
    criticalBadge: {
        backgroundColor: '#FEE2E2',
    },
    statusBadgeText: {
        fontSize: 12,
        fontWeight: '500',
        marginLeft: 4,
    },
    stableBadgeText: {
        color: '#15803D',
    },
    criticalBadgeText: {
        color: '#B91C1C',
    },
    clientIdText: {
        fontSize: 14,
        color: '#4B5563',
    },
    actionsColumn: {
        gap: 10,
    },
    actionButton: {
        height: 40,
        borderWidth: 1,
        borderColor: '#AAB2BD',
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    actionButtonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#253246',
    },
})

export default ClientDetailHeader