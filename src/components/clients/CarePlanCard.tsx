import { carePlanActions, omahaItems } from '@/src/data/carePlanData'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type OmahaItem = {
  id: string
  domain: string
  problem: string
  intervention: string
}

type CarePlanCardProps = {
  onPressDetails?: () => void
  lastUpdated?: string
  goal?: string
  actions?: string[]
  omahaItems?: OmahaItem[]
}

const CarePlanCard = ({
  onPressDetails,
  lastUpdated = '18 mrt 2026, 10:30',
  goal = 'Stabiliseren van bloedsuikerwaarden en ondersteunen van veilige mobiliteit in huis.',
  actions = carePlanActions,
  omahaItems: items = omahaItems
}: CarePlanCardProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.mainDivider} />

      <View style={styles.omahaSection}>
        <View style={styles.omahaHeader}>
          <Text style={styles.omahaTitle}>Zorgplan (Omaha)</Text>

          <Pressable
            onPress={onPressDetails}
            style={({ pressed }) => [
              styles.detailsButton,
              pressed && styles.detailsButtonPressed,
            ]}
          >
            <Text style={styles.detailsButtonText}>Bekijk Details</Text>
          </Pressable>
        </View>

        {items.map((item) => (
          <View key={item.id} style={styles.omahaItem}>
            <View style={styles.omahaAccent} />

            <View style={styles.omahaTextWrap}>
              <Text style={styles.omahaLine}>
                <Text style={styles.omahaLabel}>Domein: </Text>
                {item.domain}
              </Text>

              <Text style={styles.omahaLine}>
                <Text style={styles.omahaLabel}>Probleem: </Text>
                {item.problem}
              </Text>

              <Text style={styles.omahaLine}>
                <Text style={styles.omahaLabel}>Interventie: </Text>
                {item.intervention}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F9FAFB',
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  mainDivider: {
    height: 1,
    backgroundColor: '#D1D5DB',
    marginTop: 12,
    marginBottom: 14,
  },
  updatePanel: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#F3F4F6',
    padding: 14,
  },
  updateHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  updateHeaderText: {
    flex: 1,
    marginLeft: 10,
  },
  updateTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#253246',
  },
  updateDate: {
    marginTop: 2,
    fontSize: 12,
    color: '#6B7280',
  },
  updateContentBox: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#C7CDD4',
    backgroundColor: '#F3F4F6',
    padding: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#253246',
    marginBottom: 6,
  },
  goalText: {
    fontSize: 15,
    lineHeight: 34,
    color: '#4B5563',
  },
  labelActions: {
    fontSize: 14,
    fontWeight: '700',
    color: '#253246',
    marginTop: 18,
    marginBottom: 6,
  },
  bulletText: {
    fontSize: 15,
    lineHeight: 32,
    color: '#4B5563',
  },
  omahaSection: {
    marginTop: 18,
  },
  omahaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  omahaTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  detailsButton: {
    minHeight: 36,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#98A2B3',
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsButtonPressed: {
    opacity: 0.9,
  },
  detailsButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  omahaItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  omahaAccent: {
    width: 3,
    height: '100%',
    minHeight: 76,
    backgroundColor: '#9CA3AF',
    marginRight: 12,
  },
  omahaTextWrap: {
    flex: 1,
  },
  omahaLine: {
    fontSize: 15,
    lineHeight: 26,
    color: '#4B5563',
    marginBottom: 2,
  },
  omahaLabel: {
    fontWeight: '700',
    color: '#253246',
  },
})

export default CarePlanCard