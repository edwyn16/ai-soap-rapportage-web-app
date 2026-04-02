import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

type TranscriptCardProps = {
  label?: string
  transcript?: string
  duration?: string
}

const TranscriptCard = ({
  label = 'Audio transcriptie',
  transcript = '"Mevrouw Jansen heeft last van haar knie. Ze slaapt slecht. Bloeddruk gemeten, was 135 over 85..."',
  duration = '1:23 min.',
}: TranscriptCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Input</Text>

      <View style={styles.innerCard}>
        <View style={styles.topRow}>
          <Text style={styles.label}>{label}</Text>

          <View style={styles.iconWrap}>
            <Ionicons name="volume-medium-outline" size={18} color="#667085" />
          </View>
        </View>

        <Text style={styles.transcript}>{transcript}</Text>

        <Text style={styles.duration}>Duur: {duration}</Text>
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
    marginBottom: 16,
  },
  innerCard: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 4,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  topRow: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  label: {
    fontSize: 13,
    color: '#667085',
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  transcript: {
    fontSize: 16,
    lineHeight: 31,
    color: '#4B5563',
    marginBottom: 12,
  },
  duration: {
    fontSize: 14,
    color: '#667085',
  },
})

export default TranscriptCard