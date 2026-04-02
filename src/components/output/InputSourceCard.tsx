import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type InputSourceCardProps = {
    title: string
    duration: string
    transcript: string
    isExpanded?: boolean
    onPress?: () => void
}

const InputSourceCard = ({ title, duration, transcript, isExpanded = true, onPress }: InputSourceCardProps) => {
    return (
        <View style={styles.card}>
        <Pressable onPress={onPress} disabled={!onPress} style={styles.header} accessibilityRole="button" accessibilityLabel={title}>
            <Text style={styles.title}>{title}</Text>
            <Ionicons name={isExpanded ? 'chevron-down' : 'chevron-forward'} size={18} color="#8A8A8A" />
        </Pressable>

        {isExpanded ? (
            <View style={styles.body}>
            <Text style={styles.meta}>Audio transcriptie • {duration}</Text>

                <View style={styles.transcriptBox}>
                    <Text style={styles.transcriptText}>{transcript}</Text>
                </View>
            </View>
        ) : null}
        </View>
    )
}

export default InputSourceCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F3F1EE',
        borderWidth: 1,
        borderColor: '#D6D1CB',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 16,
    },
    header: {
        minHeight: 50,
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '700',
        color: '#2A2A2A',
    },
    body: {
        borderTopWidth: 1,
        borderTopColor: '#D6D1CB',
        paddingHorizontal: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
    meta: {
        fontSize: 14,
        lineHeight: 20,
        color: '#7A7A7A',
        marginBottom: 10,
    },
    transcriptBox: {
        backgroundColor: '#ECEAEA',
        borderWidth: 1,
        borderColor: '#D6D1CB',
        borderRadius: 3,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    transcriptText: {
        fontSize: 16,
        lineHeight: 30,
        color: '#3A3A3A',
    },
})