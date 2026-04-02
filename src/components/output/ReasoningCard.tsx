import { StyleSheet, Text, View } from 'react-native'

type ReasoningCardProps = {
  title: string
  paragraphs: string[]
}

const ReasoningCard = ({ title, paragraphs }: ReasoningCardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.content}>
                {paragraphs.map((paragraph, index) => (
                    <Text key={`${title}-${index}`} style={[ styles.paragraph, index !== paragraphs.length - 1 && styles.paragraphSpacing, ]}>
                        {paragraph}
                    </Text>
                ))}
            </View>
        </View>
    )
}

export default ReasoningCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F3F1EE',
        borderWidth: 1,
        borderColor: '#D6D1CB',
        borderRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 14,
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '700',
        color: '#2A2A2A',
        marginBottom: 12,
    },
    content: {
        gap: 0,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 28,
        color: '#5E5E5E',
    },
    paragraphSpacing: {
        marginBottom: 10,
    },
})