import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type ReportQuickActionsProps = {
  onRegenerate?: () => void
  onAdjustWithAi?: () => void
  onSaveDraft?: () => void
}

const ReportQuickActions = ({
  onRegenerate,
  onAdjustWithAi,
  onSaveDraft,
}: ReportQuickActionsProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Snelle acties</Text>

      <View style={styles.actionsWrap}>
        <Pressable
          onPress={onRegenerate}
          style={styles.actionButton}
          accessibilityRole="button"
          accessibilityLabel="Opnieuw genereren"
        >
          <Text style={styles.actionButtonText}>Opnieuw genereren</Text>
        </Pressable>

        <Pressable
          onPress={onAdjustWithAi}
          style={styles.actionButton}
          accessibilityRole="button"
          accessibilityLabel="Aanpassen met AI"
        >
          <Text style={styles.actionButtonText}>Aanpassen met AI</Text>
        </Pressable>

        <Pressable
          onPress={onSaveDraft}
          style={styles.actionButton}
          accessibilityRole="button"
          accessibilityLabel="Concept opslaan"
        >
          <View style={styles.inlineContent}>
            <Ionicons name="save-outline" size={18} color="#111827" />
            <Text style={styles.actionButtonText}>Concept opslaan</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
    padding: 18,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F1F1F',
    marginBottom: 18,
  },
  actionsWrap: {
    gap: 14,
  },
  actionButton: {
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
  inlineContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
})

export default ReportQuickActions