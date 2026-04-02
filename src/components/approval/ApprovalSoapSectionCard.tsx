import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import type { ApprovalSoapSection } from '@/src/data/approvalData'

type ApprovalSoapSectionCardProps = {
  section: ApprovalSoapSection
  isOpen: boolean
  onToggle: () => void
}

const ApprovalSoapSectionCard = ({
  section,
  isOpen,
  onToggle,
}: ApprovalSoapSectionCardProps) => {
  return (
    <View style={styles.card}>
      <Pressable
        onPress={onToggle}
        style={styles.header}
        accessibilityRole="button"
        accessibilityLabel={`${section.title} openen of sluiten`}
      >
        <View style={styles.left}>
          <View style={styles.letterBadge}>
            <Text style={styles.letter}>{section.letter}</Text>
          </View>

          <View style={styles.textWrap}>
            <Text style={styles.title}>{section.title}</Text>
            <Text style={styles.subtitle}>{section.subtitle}</Text>
          </View>
        </View>

        <Ionicons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={18}
          color="#475569"
        />
      </Pressable>

      {isOpen ? (
        <View style={styles.body}>
          <Text style={styles.content}>{section.content}</Text>
        </View>
      ) : null}
    </View>
  )
}

export default ApprovalSoapSectionCard

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  header: {
    minHeight: 72,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  letterBadge: {
    width: 38,
    height: 38,
    borderRadius: 999,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    fontSize: 20,
    lineHeight: 22,
    fontFamily: 'Sora_600SemiBold',
    color: '#374151',
  },
  textWrap: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Inter_600SemiBold',
    color: '#1F2937',
  },
  subtitle: {
    marginTop: 2,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
  },
  body: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
  },
  content: {
    fontSize: 15,
    lineHeight: 24,
    fontFamily: 'Inter_400Regular',
    color: '#334155',
  },
})