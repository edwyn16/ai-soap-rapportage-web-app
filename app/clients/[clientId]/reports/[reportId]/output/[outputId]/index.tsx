import { useLocalSearchParams, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, View } from 'react-native'
import AiOutputHeader from '@/src/components/output/AiOutputHeader'
import { aiOutputHeaderDataById } from '@/src/data/aiOutput'
import SoapOutputSectionCard from '@/src/components/output/SoapOutputSectionCard'
import { soapOutputSections } from '@/src/data/soapOutputSections'
import { versionHistoryData } from '@/src/data/versionHistoryData'
import ReasoningCard from '@/src/components/output/ReasoningCard'
import { reasoningData } from '@/src/data/reasoningData'
import OutputActionsCard from '@/src/components/output/OutputActionsCard'
import { outputActionsData } from '@/src/data/outputActionsData'
import { useState } from 'react'
import InputSourceCard from '@/src/components/output/InputSourceCard'
import { InputSourceData } from '@/src/data/inputSourceData'
import VersionHistoryCard from '@/src/components/output/VersionHistoryCard'

const AiOutputDetailScreen = () => {
  const router = useRouter()
  const { clientId, reportId, outputId } = useLocalSearchParams<{
    clientId?: string | string[]
    reportId?: string | string[]
    outputId?: string | string[] }>()
  
  const rawClientId = Array.isArray(clientId) ? clientId[0] : clientId
  const rawReportId = Array.isArray(reportId) ? reportId[0] : reportId
  const rawOutputId = Array.isArray(outputId) ? outputId[0] : outputId

  const [feedback, setFeedback] = useState('')
  const headerData = aiOutputHeaderDataById[rawOutputId ?? 's'] ?? aiOutputHeaderDataById['s']

  const handleApprove = () => {
    if (!rawClientId || !rawReportId) return
    router.push(`/clients/${rawClientId}/reports/${rawReportId}/approval`)
  }

  const handleEdit = () => {
    console.log('Edit output', { outputId: rawOutputId, feedback })
  }

  const handleReject = () => {
    console.log('Reject output', { outputId: rawOutputId, feedback })
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <AiOutputHeader clientName={headerData.clientName} reportDate={headerData.reportDate} reportType={headerData.reportType} statusLabel={headerData.statusLabel} onBackPress={() => router.back()} />
        
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            {soapOutputSections.map((section) => (
                <SoapOutputSectionCard key={section.id} letter={section.letter} title={section.title} content={section.content} badgeText={section.badgeText} confidenceText={section.confidenceText} />
            ))}

            {InputSourceData.map((v) => (
                <InputSourceCard key={v.id} title={v.title} duration={v.duration} transcript={v.transcript} />
            ))}

            <ReasoningCard title={reasoningData.title} paragraphs={reasoningData.paragraphs} />
            <OutputActionsCard title={outputActionsData.title} approveLabel={outputActionsData.approveLabel} editLabel={outputActionsData.editLabel}
                rejectLabel={outputActionsData.rejectLabel} feedbackLabel={outputActionsData.feedbackLabel}
                feedbackPlaceholder={outputActionsData.feedbackPlaceholder} feedbackValue={feedback}
                onChangeFeedback={setFeedback} onApprovePress={handleApprove} onEditPress={handleEdit} onRejectPress={handleReject} />

            <VersionHistoryCard title={versionHistoryData.title} items={versionHistoryData.items} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F3F4F6',
  },
  backButton: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  backText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#475569',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#253246',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
})

export default AiOutputDetailScreen