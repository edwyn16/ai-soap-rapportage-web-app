import { StyleSheet, Text, View } from 'react-native'
import { VersionHistoryItem } from '@/src/data/versionHistoryData'

type VersionHistoryCardProps = {
    title: string
    items: VersionHistoryItem[]
}

const VersionHistoryCard = ({ title, items }: VersionHistoryCardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>

            <View style={styles.timeline}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1

                    return (
                        <View key={item.id} style={styles.timelineItem}>
                            <View style={styles.leftColumn}>
                                <View style={[ styles.dot, index === 0 && styles.dotActive, item.isMuted && styles.dotMuted, ]} />
                                    {!isLast ? <View style={styles.line} /> : null}
                                </View>

                            <View style={styles.contentColumn}>
                                <View style={styles.topRow}>
                                    <Text style={[ styles.itemTitle, item.isMuted && styles.itemTitleMuted, ]} >
                                        {item.title}
                                    </Text>

                                    {!!item.date && (
                                        <Text style={[ styles.itemDate, item.isMuted && styles.itemDateMuted, ]} >
                                            {item.date}
                                        </Text>
                                    )}
                                </View>

                                {!!item.description && (
                                    <Text style={[ styles.itemDescription, item.isMuted && styles.itemDescriptionMuted, ]} >
                                        {item.description}
                                    </Text>
                                )}
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default VersionHistoryCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F3F1EE',
        borderWidth: 1,
        borderColor: '#D6D1CB',
        borderRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '700',
        color: '#2A2A2A',
        marginBottom: 16,
    },
    timeline: {
        gap: 0,
    },
    timelineItem: {
        flexDirection: 'row',
    },
    leftColumn: {
        width: 22,
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: '#8A8A8A',
        marginTop: 6,
    },
    dotActive: {
        backgroundColor: '#1F1F1F',
    },
    dotMuted: {
        backgroundColor: '#D6D1CB',
    },
    line: {
        width: 1,
        flex: 1,
        backgroundColor: '#D6D1CB',
        marginTop: 6,
        marginBottom: 6,
    },
    contentColumn: {
        flex: 1,
        paddingLeft: 10,
        paddingBottom: 16,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 12,
        marginBottom: 6,
    },
    itemTitle: {
        flex: 1,
        fontSize: 15,
        lineHeight: 22,
        fontWeight: '500',
        color: '#2A2A2A',
    },
    itemTitleMuted: {
        color: '#A3A3A3',
    },
    itemDate: {
        width: 112,
        fontSize: 14,
        lineHeight: 20,
        color: '#7A7A7A',
        textAlign: 'left',
    },
    itemDateMuted: {
        color: '#B5B5B5',
    },
    itemDescription: {
        fontSize: 14,
        lineHeight: 20,
        color: '#6A6A6A',
    },
    itemDescriptionMuted: {
        color: '#B5B5B5',
    },
})