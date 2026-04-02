import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type ApprovalBottomActionsProps = {
  onSaveDraftPress?: () => void
  onRejectPress?: () => void
  onApprovePress?: () => void
}

const ApprovalBottomActions = ({
  onSaveDraftPress,
  onRejectPress,
  onApprovePress,
}: ApprovalBottomActionsProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.helperText}>
        Controleer de rapportage zorgvuldig voordat je goedkeurt
      </Text>

      <Pressable
        onPress={onSaveDraftPress}
        style={styles.draftButton}
        accessibilityRole="button"
        accessibilityLabel="Opslaan als concept"
      >
        <Text style={styles.draftButtonText}>Opslaan als concept</Text>
      </Pressable>

      <Pressable
        onPress={onRejectPress}
        style={styles.rejectButton}
        accessibilityRole="button"
        accessibilityLabel="Afkeuren"
      >
        <Ionicons name="close-circle-outline" size={18} color="#DC2626" />
        <Text style={styles.rejectButtonText}>Afkeuren</Text>
      </Pressable>

      <Pressable
        onPress={onApprovePress}
        style={styles.approveButton}
        accessibilityRole="button"
        accessibilityLabel="Goedkeuren en opslaan"
      >
        <Ionicons name="checkmark-circle-outline" size={18} color="#FFFFFF" />
        <Text style={styles.approveButtonText}>Goedkeuren & opslaan</Text>
      </Pressable>
    </View>
  )
}

export default ApprovalBottomActions

const styles = StyleSheet.create({
  card: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    gap: 10,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  helperText: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
    marginBottom: 2,
  },
  draftButton: {
    minHeight: 46,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  draftButtonText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Inter_600SemiBold',
    color: '#111827',
  },
  rejectButton: {
    minHeight: 46,
    borderWidth: 1,
    borderColor: '#FCA5A5',
    borderRadius: 10,
    backgroundColor: '#FFF5F5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 14,
  },
  rejectButtonText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Inter_600SemiBold',
    color: '#DC2626',
  },
  approveButton: {
    minHeight: 48,
    borderRadius: 10,
    backgroundColor: '#09A63E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 14,
  },
  approveButtonText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Inter_700Bold',
    color: '#FFFFFF',
  },
})