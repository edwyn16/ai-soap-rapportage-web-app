import { Pressable, StyleSheet, Text, View } from "react-native";

type DashboardFiltersProps = {
  activeFilter: "All" | "Today" | "Pending" | "Completed";
  onChangeFilter: (value: "All" | "Today" | "Pending" | "Completed") => void;
};

const DashboardFilters = ({
  activeFilter,
  onChangeFilter,
}: DashboardFiltersProps) => {
  const filters: ("All" | "Today" | "Pending" | "Completed")[] = [
    "All", "Today", "Pending", "Completed",
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <Pressable
              key={filter}
              onPress={() => onChangeFilter(filter)}
              style={[styles.filterChip, isActive && styles.filterChipActive]}
            >
              <Text
                style={[
                  styles.filterChipText,
                  isActive && styles.filterChipTextActive,
                ]}
              >
                {filter}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 18,
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  filterChip: {
    minWidth: 66,
    height: 38,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#AAB2BD",
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },
  filterChipActive: {
    backgroundColor: "#1F2C40",
    borderColor: "#1F2C40",
  },
  filterChipText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#253246",
  },
  filterChipTextActive: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});

export default DashboardFilters;
