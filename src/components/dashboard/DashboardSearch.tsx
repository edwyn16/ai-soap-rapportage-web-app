import { StyleSheet, Text, TextInput, View } from "react-native"

const DashboardSearch = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.pageTitle}> Client Overview </Text>

            <TextInput style={styles.searchInput} placeholder="Search clients..." placeholderTextColor={styles.placeHolder.color} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 18,
        paddingTop: 22,
        paddingBottom: 16,
    },
    pageTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#253246',
        marginBottom: 18,
    },
    searchInput: {
        height: 42,
        borderWidth: 1,
        borderColor: '#AAB2BD',
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 14,
        fontSize: 16,
        color: '#253246',
    },
    placeHolder: {
        color: '#8A8F98',
    }
})

export default DashboardSearch