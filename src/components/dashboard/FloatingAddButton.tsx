import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type FloatingAddButtonProps = {
  onPress: () => void;
}

const FloatingAddButton = ({ onPress }: FloatingAddButtonProps) => {
    return (
        <Pressable style={styles.fab} onPress={onPress}>
            <Ionicons name="add" size={30} color="#FFFFFF" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        right: 22,
        bottom: 18,
        width: 46,
        height: 46,
        backgroundColor: '#1F2C40',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    },
})

export default FloatingAddButton