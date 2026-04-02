import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ReportHeader from '@/src/components/reports/ReportHeader'
import ReportSectionList from '@/src/components/reports/ReportSectionList'
import TranscriptCard from '@/src/components/reports/TranscriptCard'
import ConfidenceCard from '@/src/components/reports/ConfidenceCard'
import ReportQuickActions from '@/src/components/reports/ReportQuickActions'
import ReportBottomActionBar from '@/src/components/reports/ReportBottomActionBar'

const ReportDetailScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <ReportHeader />

          <View style={styles.content}>
            <ReportSectionList />
            <TranscriptCard />
            <ConfidenceCard />
            <ReportQuickActions />
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <ReportBottomActionBar />
        </View>
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
    backgroundColor: '#F3F4F6',
  },
  scrollContent: {
    paddingBottom: 210,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 12,
  },
  placeholderCard: {
    borderWidth: 1,
    borderColor: '#E3E8F0',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    padding: 18,
    minHeight: 88,
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#64748B',
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#E3E8F0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 24,
  },
  bottomBarText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748B',
  },
})

export default ReportDetailScreen