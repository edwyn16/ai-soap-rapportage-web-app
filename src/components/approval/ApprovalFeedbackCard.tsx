import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

type ApprovalFeedbackCardProps = {
  value: string
  onChangeText: (value: string) => void
  onRegeneratePress?: () => void
  onAdjustWithAiPress?: () => void
}

const ApprovalFeedbackCard = ({
  value,
  onChangeText,
  onRegeneratePress,
  onAdjustWithAiPress,
}: ApprovalFeedbackCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Aanpassingen of feedback</Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        multiline
        textAlignVertical="top"
        placeholder="Voeg hier correcties of opmerkingen toe..."
        placeholderTextColor="#6B7280"
        style={styles.input}
      />

      <View style={styles.actionsRow}>
        <Pressable
          onPress={onRegeneratePress}
          style={styles.secondaryButton}
          accessibilityRole="button"
          accessibilityLabel="Rapportage regenereren"
        >
          <Ionicons name="refresh-outline" size={18} color="#111827" />
          <Text style={styles.secondaryButtonText}>Regenereren</Text>
        </Pressable>

        <Pressable
          onPress={onAdjustWithAiPress}
          style={styles.secondaryButton}
          accessibilityRole="button"
          accessibilityLabel="Aanpassen met AI"
        >
          <Ionicons name="sparkles-outline" size={18} color="#111827" />
          <Text style={styles.secondaryButtonText}>Aanpassen met AI</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ApprovalFeedbackCard

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 17,
    lineHeight: 24,
    fontFamily: 'Sora_600SemiBold',
    color: '#0F172A',
  },
  input: {
    minHeight: 96,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter_400Regular',
    color: '#334155',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  secondaryButton: {
    flex: 1,
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Inter_600SemiBold',
    color: '#111827',
  },
})