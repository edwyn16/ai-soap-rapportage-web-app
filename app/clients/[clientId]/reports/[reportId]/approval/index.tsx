import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, View } from 'react-native'
import ApprovalHeader from '@/src/components/approval/ApprovalHeader'
import ApprovalSummaryCard from '@/src/components/approval/ApprovalSummaryCard'
import ApprovalSoapSectionList from '@/src/components/approval/ApprovalSoapSectionList'
import ApprovalFeedbackCard from '@/src/components/approval/ApprovalFeedbackCard'
import { useState } from 'react'
import ApprovalBottomActions from '@/src/components/approval/ApprovalBottomActions'
import { useLocalSearchParams, useRouter } from 'expo-router'


const ApprovalScreen = () => {
  const router = useRouter()
  const { clientId } = useLocalSearchParams<{ clientId?: string | string[] }>()

  const rawClientId = Array.isArray(clientId) ? clientId[0] : clientId
  const [feedback, setFeedback] = useState('')

  const handleSaveDraft = () => {
    console.log('Save as draft', { feedback })
  }

  const handleReject = () => {
    console.log('Reject report', { feedback })
  }

  const handleApprove = () => {
    if (!rawClientId) return
    router.push(`/clients/${rawClientId}`)
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <ApprovalHeader />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <ApprovalSummaryCard />
          <ApprovalSoapSectionList />
          <ApprovalFeedbackCard value={feedback} onChangeText={setFeedback} onRegeneratePress={() => console.log('Regenerate')} onAdjustWithAiPress={() => console.log('Adjust with AI')} />
        </ScrollView>
        <ApprovalBottomActions onSaveDraftPress={handleSaveDraft} onRejectPress={handleReject} onApprovePress={handleApprove} />
      </View>
    </SafeAreaView>
  )
}

export default ApprovalScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    gap: 16,
  },
})