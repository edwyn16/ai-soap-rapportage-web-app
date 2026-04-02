import { Pressable, Text, View, StyleSheet } from "react-native"

type ClientStatus = 'Completed' | 'In Progress' | 'Pending'

export type ClientCardItem = {
    id: string
    name: string
    lastVisit: string
    status: ClientStatus
    actionLabel: 'View Report' | 'Open File'
}

type ClientCardProps = {
    client: ClientCardItem
    onPress: () => void
}

const ClientCard = ({ client, onPress }: ClientCardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.clientName}> {client.name} </Text>
            <Text style={styles.lastVisitLabel}> Last visit: {client.lastVisit} </Text>

            <View style={styles.statusRow}>
                <View style={styles.statusBadge}>
                    <Text style={styles.statusBadgeText}> {client.status} </Text>
                </View>
            </View>

            <Pressable style={styles.cardButton} onPress={onPress}>
                <Text style={styles.cardButtonText}> {client.actionLabel} </Text>
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
  clientName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#253246',
    marginBottom: 6,
  },
  lastVisitLabel: {
    fontSize: 15,
    color: '#475467',
    marginBottom: 10,
  },
  statusRow: {
    marginBottom: 12,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    minHeight: 22,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#7E8794',
    backgroundColor: '#EDEEF0',
    justifyContent: 'center',
  },
  statusBadgeText: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  cardButton: {
    height: 38,
    backgroundColor: '#1F2C40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
})

export default ClientCard