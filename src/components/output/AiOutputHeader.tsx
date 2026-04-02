import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type AiOutputHeaderProps = {
    clientName: string
    reportDate: string
    reportType: string
    statusLabel: string
    onBackPress: () => void
}

const AiOutputHeader = ({ clientName, reportDate, reportType, statusLabel, onBackPress, }: AiOutputHeaderProps) => {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onBackPress} style={styles.backButton} accessibilityRole="button" accessibilityLabel="Ga terug naar rapportage review">
        <Ionicons name="arrow-back" size={18} color="#5B6470" />
        <Text style={styles.backText}>terug naar rapportage review</Text>
      </Pressable>

      <View style={styles.content}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>AI Output Detail</Text>
          <Text style={styles.metaText}>
            {clientName} • {reportDate} • {reportType}
          </Text>
        </View>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{statusLabel}</Text>
        </View>
      </View>
    </View>
  )
}

export default AiOutputHeader

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F6F4F1',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D3CC',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 14,
  },
  backText: {
    fontSize: 15,
    lineHeight: 20,
    color: '#5B6470',
  },
  content: {
    gap: 14,
  },
  textBlock: {
    gap: 8,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '700',
    color: '#141414',
  },
  metaText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#6B7280',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F4E1A8',
    borderWidth: 1,
    borderColor: '#E2C76D',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  statusText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#8A6500',
    fontWeight: '500',
  },
})