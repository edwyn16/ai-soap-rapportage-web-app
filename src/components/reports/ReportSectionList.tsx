import { Ionicons } from '@expo/vector-icons'
import { useMemo, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'

type SoapKey = 'S' | 'O' | 'A' | 'P'
type OutputSectionKey = 'subjective' | 'objective' | 'analysis' | 'plan'

type SoapSectionItem = {
  key: SoapKey
  outputKey: OutputSectionKey
  title: string
  value: string
  suggestion?: string
}

type ReportSectionListProps = {
  initialSections?: SoapSectionItem[]
  onSectionsChange?: (sections: SoapSectionItem[]) => void
}

const defaultSections: SoapSectionItem[] = [
  {
    key: 'S',
    outputKey: 'subjective',
    title: 'Subjectief',
    value:
      'Cliënt geeft aan last te hebben van pijn in de rechterknie. Slaapt slecht de laatste nachten. Voelt zich verder redelijk goed.',
    suggestion: 'AI-suggestie: mogelijk aanvullen met specifieke tijdstippen',
  },
  {
    key: 'O',
    outputKey: 'objective',
    title: 'Objectief',
    value:
      'Cliënt liep zelfstandig met lichte mankheid. Geen zichtbare zwelling of roodheid waargenomen.',
    suggestion: 'AI-suggestie: eventueel vitale waarden of observaties toevoegen',
  },
  {
    key: 'A',
    outputKey: 'analysis',
    title: 'Analyse',
    value:
      'Pijnklachten lijken invloed te hebben op mobiliteit en nachtrust. Verdere observatie aanbevolen.',
    suggestion: 'AI-suggestie: benoem relatie tussen klacht en functioneren',
  },
  {
    key: 'P',
    outputKey: 'plan',
    title: 'Plan',
    value:
      'Pijnklachten blijven monitoren. Indien klachten aanhouden bespreken met behandelaar of huisarts.',
    suggestion: 'AI-suggestie: concreet vervolg- of evaluatiemoment toevoegen',
  },
]

const ReportSectionList = ({
  initialSections = defaultSections,
  onSectionsChange,
}: ReportSectionListProps) => {
  const router = useRouter()
  const { clientId, reportId } = useLocalSearchParams<{
    clientId: string
    reportId: string
  }>()

  const [sections, setSections] = useState<SoapSectionItem[]>(initialSections)
  const [openKey, setOpenKey] = useState<SoapKey>('S')

  const handleToggle = (key: SoapKey) => {
    setOpenKey((currentKey) => (currentKey === key ? currentKey : key))
  }

  const handleChangeText = (key: SoapKey, nextValue: string) => {
    const nextSections = sections.map((section) =>
      section.key === key ? { ...section, value: nextValue } : section
    )

    setSections(nextSections)
    onSectionsChange?.(nextSections)
  }

  const handleOpenAiOutput = (sectionKey: OutputSectionKey) => {
    if (!clientId || !reportId) return

    router.push(
      `/clients/${clientId}/reports/${reportId}/output/${sectionKey}`
    )
  }

  const aiFilledCount = useMemo(() => {
    return sections.filter((section) => section.value.trim().length > 0).length
  }, [sections])

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>AI-gegenereerde rapportage</Text>

        <View style={styles.aiBadge}>
          <View style={styles.aiDot} />
          <Text style={styles.aiBadgeText}>AI</Text>
        </View>
      </View>

      <View style={styles.sectionsWrap}>
        {sections.map((section, index) => {
          const isOpen = openKey === section.key

          return (
            <View key={section.key} style={[ styles.sectionCard, index !== sections.length - 1 && styles.sectionSpacing, ]}>
              <View style={styles.sectionHeader}>
                <Pressable onPress={() => handleToggle(section.key)} style={styles.sectionHeaderMain} accessibilityRole="button" accessibilityLabel={`${section.title} sectie openen of sluiten`}>
                  <View style={styles.sectionHeaderLeft}>
                    <Text style={styles.sectionLetter}>{section.key}</Text>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                  </View>

                  <Ionicons name={isOpen ? 'chevron-down' : 'chevron-forward'} size={18} color="#111827" />
                </Pressable>

                <Pressable onPress={() => handleOpenAiOutput(section.outputKey)} style={styles.outputLinkButton} accessibilityRole="button" accessibilityLabel={`Open AI output details voor ${section.title}`}>
                  <Text style={styles.outputLinkText}>AI output</Text>
                  <Ionicons name="arrow-forward" size={16} color="#0E7FAA" />
                </Pressable>
              </View>

              {isOpen ? (
                <View style={styles.sectionBody}>
                  <TextInput
                    value={section.value}
                    onChangeText={(text) => handleChangeText(section.key, text)}
                    multiline
                    textAlignVertical="top"
                    placeholder={`Vul ${section.title.toLowerCase()} aan`}
                    placeholderTextColor="#9CA3AF"
                    style={styles.input}
                  />

                  {section.suggestion ? (
                    <Text style={styles.suggestionText}>{section.suggestion}</Text>
                  ) : null}
                </View>
              ) : null}
            </View>
          )
        })}
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>
          {aiFilledCount} van 4 secties bevatten AI-inhoud
        </Text>
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
    padding: 14,
  },
  headerRow: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    color: '#1F1F1F',
  },
  aiBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 6,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  aiDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#3B82F6',
  },
  aiBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  sectionsWrap: {
    gap: 14,
  },
  sectionCard: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    backgroundColor: '#F8F8F8',
  },
  sectionSpacing: {},
  sectionHeader: {
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 10,
    gap: 10,
  },
  sectionHeaderMain: {
    minHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  sectionHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  sectionLetter: {
    fontSize: 25,
    fontWeight: '700',
    color: '#111827',
    lineHeight: 28,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B5563',
    flexShrink: 1,
  },
  outputLinkButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 2,
  },
  outputLinkText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0E7FAA',
  },
  sectionBody: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    padding: 14,
  },
  input: {
    minHeight: 132,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    lineHeight: 28,
    color: '#1F2937',
  },
  suggestionText: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 18,
    color: '#6B7280',
  },
  footerRow: {
    marginTop: 14,
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
  },
})

export default ReportSectionList