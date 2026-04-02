import React from 'react'
import { Pressable, StyleSheet, Text, View, } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

type ReportHeaderProps = {
  clientName?: string
  reportDate?: string
  reportTime?: string
}

const ReportHeader = ({
  clientName = 'Jansen, M.',
  reportDate = '24-03-2026',
  reportTime = '14:35',
}: ReportHeaderProps) => {
  const router = useRouter()
  const { clientId } = useLocalSearchParams<{ clientId: string }>()

  const handleBack = () => {
    if (!clientId) {
      router.push('/')
      return
    }

    router.push(`/clients/${clientId}`)
  }

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={handleBack}
        style={styles.backButton}
        accessibilityRole="button"
        accessibilityLabel="Terug naar cliëntdossier"
      >
        <Ionicons name="chevron-back" size={18} color="#475569" />
        <Text style={styles.backButtonText}>Terug naar cliëntdossier</Text>
      </Pressable>

      <Text style={styles.title}>Rapportage review</Text>
      <Text style={styles.subtitle}>
        Controleer en pas de AI-gegenereerde rapportage aan
      </Text>

      <View style={styles.clientCard}>
        <Text style={styles.clientName}>Cliënt: {clientName}</Text>
        <Text style={styles.clientMeta}>
          {reportDate} | {reportTime}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F1F1F1',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#D6DADF',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 18,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#475569',
  },
  title: {
    fontSize: 38,
    lineHeight: 42,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    color: '#475569',
    marginBottom: 16,
  },
  clientCard: {
    borderWidth: 1,
    borderColor: '#C7CDD4',
    borderRadius: 6,
    backgroundColor: '#F7F7F8',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  clientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 4,
  },
  clientMeta: {
    fontSize: 15,
    color: '#475569',
  },
})

export default ReportHeader