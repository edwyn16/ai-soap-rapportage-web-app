import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

const DashboardTopBar = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.topBar}>
                <View style={styles.iconButton}>
                    <Text style={styles.iconText}> + </Text>
                </View>

                <View style={styles.topBarRight}>
                    <View style={styles.iconWrap}>
                        <Ionicons name="notifications-outline" size={22} color="#253246" />
                        <View style={styles.notificationDot} />
                    </View>

                    <View style={styles.iconWrap}>
                        <Ionicons name="person-outline" size={22} color="#253246" />
                    </View>

                    <View style={styles.iconWrap}>
                        <Ionicons name="menu-outline" size={24} color="#253246" />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F3F4F6',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C9D1',
        paddingHorizontal: 14,
        paddingTop: 10,
        paddingBottom: 10,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconButton: {
        width: 38,
        height: 38,
        borderWidth: 1,
        borderColor: '#7E8794',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9DDE3',
    },
    iconText: {
        fontSize: 24,
        color: '#253246',
        lineHeight: 24,
        fontWeight: '400',
    },
    topBarRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },
    iconWrap: {
        position: 'relative',
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationDot: {
        position: 'absolute',
        top: 0,
        right: -2,
        width: 7,
        height: 7,
        borderRadius: 999,
        backgroundColor: '#253246',
    },
})

export default DashboardTopBar;