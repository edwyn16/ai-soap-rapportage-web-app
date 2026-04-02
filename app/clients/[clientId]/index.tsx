import { useLocalSearchParams, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ClientDetailHeader from '@/src/components/clients/ClientDetailHeader'
import { clientDetails } from '@/src/data/clientDetails'
import ClientInfoCard from '@/src/components/clients/ClientInfoCard'
import RecentReportCard from '@/src/components/clients/RecentReportCard'
import { reports } from '@/src/data/reports'
import AiAssistantCard from '@/src/components/clients/AiAssistantCard'
import { aiAssistantSuggestion } from '@/src/data/aiAssistantData'
import CarePlanCard from '@/src/components/clients/CarePlanCard'
import WarningsNotesCard from '@/src/components/clients/WarningsNotesCard'
import { warningsNotesData } from '@/src/data/warningsNotesData'

const ClientDetailScreen = () => {
  const { clientId } = useLocalSearchParams<{ clientId: string }>()
  const router = useRouter()
  const client = clientDetails.find((item) => item.id === clientId)
  const clientReports = reports.filter((report) => report.clientId === clientId)

  if (!client) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.screen}>
          <Text style={styles.title}> Client Not Found </Text>
          <Text style={styles.subtitle}> The client you are looking for does not exist. Please check the ID and try again. </Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <ClientDetailHeader name={client.name} age={client.age} status={client.status} clientCode={client.clientCode} />
        
        <FlatList
          data={clientReports}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View style={styles.headerContent}>
              <ClientInfoCard client={client} />

              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Recente Rapportages</Text>
              </View>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.reportCardWrap}>
              <RecentReportCard item={item} onPress={() => { router.push(`/clients/${client.id}/reports/${item.id}`)}} />
            </View>
          )}
          ListFooterComponent={
            <View style={styles.footerContent}>
                <View style={styles.cardSpacing}>
                    <AiAssistantCard suggestion={aiAssistantSuggestion} onStartNewReport={() => {router.push(`/clients/${client.id}/reports/new`)}} />
                </View>
                <View style={styles.cardSpacing}>
                    <CarePlanCard onPressDetails={() => {router.push(`/clients/${client.id}/care-plan`)}} />
                </View>
                <View style={styles.cardSpacingLast}>
                    <WarningsNotesCard items={warningsNotesData} onAddNote={() => {router.push(`/clients/${client.id}/notes/new`)}} />
                </View>
            </View>
          }
        />
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
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#253246',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#475467',
    },
    headerContent: {
        paddingHorizontal: 18,
        paddingTop: 18,
    },
    listContent: {
        paddingBottom: 28,
    },
    sectionHeader: {
        marginTop: 18,
        marginBottom: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#253246',
        marginBottom: 4,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },
    reportCardWrap: {
        marginHorizontal: 18,
        marginTop: 12,
    },
    notFoundText: {
        fontSize: 18,
        color: '#253246',
        padding: 24,
    },
    footerContent: {
        marginHorizontal: 18,
        marginTop: 20,
    },
    cardSpacing: {
        marginBottom: 16,
    },
    cardSpacingLast: {
        marginBottom: 0,
    },
})

export default ClientDetailScreen