import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type ReportBottomActionBarProps = {
  onReject?: () => void
  onSaveDraft?: () => void
  onApprove?: () => void
}

const ReportBottomActionBar = ({
  onReject,
  onSaveDraft,
  onApprove,
}: ReportBottomActionBarProps) => {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onReject}
        style={styles.secondaryButton}
        accessibilityRole="button"
        accessibilityLabel="Afkeuren"
      >
        <View style={styles.inlineContent}>
          <Ionicons name="close" size={18} color="#111827" />
          <Text style={styles.secondaryButtonText}>Afkeuren</Text>
        </View>
      </Pressable>

      <Pressable
        onPress={onSaveDraft}
        style={styles.secondaryButton}
        accessibilityRole="button"
        accessibilityLabel="Opslaan als concept"
      >
        <View style={styles.inlineContent}>
          <Ionicons name="save-outline" size={18} color="#111827" />
          <Text style={styles.secondaryButtonText}>Opslaan als concept</Text>
        </View>
      </Pressable>

      <Pressable
        onPress={onApprove}
        style={styles.primaryButton}
        accessibilityRole="button"
        accessibilityLabel="Goedkeuren en opslaan"
      >
        <View style={styles.inlineContent}>
          <Ionicons name="checkmark" size={18} color="#FFFFFF" />
          <Text style={styles.primaryButtonText}>Goedkeuren & opslaan</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 10,
  },
  secondaryButton: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#C8D0D9',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  primaryButton: {
    minHeight: 48,
    borderRadius: 4,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inlineContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
})

export default ReportBottomActionBar