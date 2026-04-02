import { StyleSheet, Text, View } from 'react-native'

type SoapOutputSectionCardProps = {
    letter: 'S' | 'O' | 'A' | 'P'
    title: string
    content: string
    badgeText?: string
    confidenceText?: string
}

const SoapOutputSectionCard = ({ letter, title, content, badgeText, confidenceText }: SoapOutputSectionCardProps) => {
      const isBulletContent = content.includes('•')

    return (
        <View style={styles.card}>
            <View style={styles.headerBlock}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>
                        {letter} — {title}
                    </Text>
                </View>

                {(badgeText || confidenceText) ? (
                <View style={styles.metaRow}>
                    {badgeText ? <Text style={styles.badgeText}>{badgeText}</Text> : <View />}

                    {confidenceText ? (
                    <View style={styles.confidenceBadge}>
                        <Text style={styles.confidenceText}>{confidenceText}</Text>
                    </View>
                    ) : null}
                </View>
                ) : null}
            </View>

            <View style={styles.contentBox}>
                <Text style={[styles.contentText, isBulletContent && styles.bulletContent]}>
                    {content}
                </Text>
            </View>
        </View>
    )
}

export default SoapOutputSectionCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F3F1EE',
        borderWidth: 1,
        borderColor: '#D6D1CB',
        borderRadius: 4,
        padding: 20,
        marginBottom: 16,
    },
    headerBlock: {
        marginBottom: 14,
    },
    titleRow: {
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '700',
        color: '#2A2A2A',
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
    },
    badgeText: {
        fontSize: 14,
        lineHeight: 18,
        color: '#8A8A8A',
        fontWeight: '500',
        flexShrink: 1,
    },
    confidenceBadge: {
        backgroundColor: '#E4E1DC',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    confidenceText: {
        fontSize: 12,
        lineHeight: 16,
        color: '#6B6B6B',
        fontWeight: '600',
    },
    contentBox: {
        backgroundColor: '#ECEAEA',
        borderWidth: 1,
        borderColor: '#D6D1CB',
        borderRadius: 3,
        paddingHorizontal: 14,
        paddingVertical: 12,
    },
    contentText: {
        fontSize: 16,
        lineHeight: 29,
        color: '#3A3A3A',
    },
    bulletContent: {
        lineHeight: 34,
    },
})