import { StyleSheet, Text, View } from 'react-native'

type ConfidenceLevel = 'Low' | 'Medium' | 'Hoog'

type ConfidenceCardProps = {
  title?: string
  level?: ConfidenceLevel
  filledBars?: number
  totalBars?: number
}

const ConfidenceCard = ({
  title = 'AI vertrouwen',
  level = 'Hoog',
  filledBars = 3,
  totalBars = 4,
}: ConfidenceCardProps) => {
  const bars = Array.from({ length: totalBars }, (_, index) => index < filledBars)

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.contentRow}>
        <View style={styles.barsRow}>
          {bars.map((isFilled, index) => (
            <View
              key={`confidence-bar-${index}`}
              style={[
                styles.bar,
                isFilled ? styles.barFilled : styles.barEmpty,
              ]}
            />
          ))}
        </View>

        <Text style={styles.levelText}>{level}</Text>
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
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F1F1F',
    marginBottom: 18,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginRight: 10,
  },
  bar: {
    width: 27,
    height: 7,
    borderRadius: 999,
  },
  barFilled: {
    backgroundColor: '#1DB446',
  },
  barEmpty: {
    backgroundColor: '#C5CBD3',
  },
  levelText: {
    fontSize: 16,
    color: '#374151',
  },
})

export default ConfidenceCard