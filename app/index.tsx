import DashboardTopBar from "@/src/components/dashboard/DashboardTopBar"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, StyleSheet, View } from "react-native";
import DashboardSearch from "@/src/components/dashboard/DashboardSearch";
import DashboardFilters from "@/src/components/dashboard/DashboardFilters";
import { useMemo, useState } from "react";
import { clients } from "@/src/data/clients";
import ClientCard from "@/src/components/dashboard/ClientCard";
import FloatingAddButton from "@/src/components/dashboard/FloatingAddButton";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Today' | 'Pending' | 'Completed'>('All')
  
  const router = useRouter()

  const filteredClients = useMemo(() => {
    if (activeFilter === 'All') {
      return clients
    }

    if (activeFilter === 'Today') {
      return clients.filter((client) => client.lastVisit.includes('Today'))
    }

    return clients.filter((client) => client.status === activeFilter)
  }, [activeFilter])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <DashboardTopBar />
        <DashboardSearch />
        <DashboardFilters activeFilter={activeFilter} onChangeFilter={setActiveFilter} />

        <FlatList data={filteredClients} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <ClientCard client={item} onPress={() => router.push(`/clients/${item.id}`)} />
          )}/>

        <FloatingAddButton onPress={() => console.log('Add new client')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  screen: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  listContent: {
    paddingTop: 4,
    paddingBottom: 90,
  },
  cardWrapper: {
    marginHorizontal: 18,
    marginBottom: 12,
  },
})

export default HomeScreen