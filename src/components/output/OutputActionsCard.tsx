import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

type OutputActionsCardProps = {
  title: string
  approveLabel: string
  editLabel: string
  rejectLabel: string
  feedbackLabel: string
  feedbackPlaceholder: string
  feedbackValue: string
  onChangeFeedback: (value: string) => void
  onApprovePress: () => void
  onEditPress: () => void
  onRejectPress: () => void
}

const OutputActionsCard = ({ title, approveLabel, editLabel, rejectLabel, feedbackLabel, feedbackPlaceholder, feedbackValue, onChangeFeedback, onApprovePress, onEditPress, onRejectPress }: OutputActionsCardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.actionsGroup}>
                <Pressable onPress={onApprovePress} style={[styles.button, styles.primaryButton]} accessibilityRole="button" accessibilityLabel={approveLabel}>
                    <Ionicons name="checkmark" size={18} color="#FFFFFF" />
                    <Text style={styles.primaryButtonText}>{approveLabel}</Text>
                </Pressable>

                <Pressable onPress={onEditPress} style={[styles.button, styles.secondaryButton]} accessibilityRole="button" accessibilityLabel={editLabel}>
                    <Text style={styles.secondaryEmoji}>✏️</Text>
                    <Text style={styles.secondaryButtonText}>{editLabel}</Text>
                </Pressable>

                <Pressable onPress={onRejectPress} style={[styles.button, styles.disabledButton]} accessibilityRole="button" accessibilityLabel={rejectLabel}>
                    <Ionicons name="close" size={18} color="#6F6F6F" />
                    <Text style={styles.disabledButtonText}>{rejectLabel}</Text>
                </Pressable>
            </View>

            <View style={styles.feedbackBlock}>
                <Text style={styles.feedbackLabel}>{feedbackLabel}</Text>

                <TextInput value={feedbackValue} onChangeText={onChangeFeedback} placeholder={feedbackPlaceholder} placeholderTextColor="#9A9A9A" multiline textAlignVertical="top" style={styles.textArea} />
            </View>
        </View>
    )
}

export default OutputActionsCard

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
    title: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '700',
        color: '#2A2A2A',
        marginBottom: 16,
    },
    actionsGroup: {
        gap: 10,
        marginBottom: 18,
    },
    button: {
        minHeight: 52,
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    primaryButton: {
        backgroundColor: '#1F1F1F',
        borderColor: '#1F1F1F',
    },
    primaryButtonText: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    secondaryButton: {
        backgroundColor: '#F3F1EE',
        borderColor: '#2A2A2A',
    },
    secondaryEmoji: {
        fontSize: 16,
        lineHeight: 20,
    },
    secondaryButtonText: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
        color: '#2A2A2A',
    },
    disabledButton: {
        backgroundColor: '#F7F6F4',
        borderColor: '#CFC9C2',
    },
    disabledButtonText: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
        color: '#6F6F6F',
    },
    feedbackBlock: {
        gap: 10,
    },
    feedbackLabel: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '600',
        color: '#6A6A6A',
    },
    textArea: {
        minHeight: 72,
        borderWidth: 1,
        borderColor: '#CFC9C2',
        borderRadius: 4,
        backgroundColor: '#F7F6F4',
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 15,
        lineHeight: 22,
        color: '#2A2A2A',
    },
})