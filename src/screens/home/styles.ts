import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#001C30",
        padding: 24,
    },
    eventName: {
        color: "#64CCC5",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48,
    },
    eventDate: {
        color: "#DAFFFB",
        fontSize: 16,

    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#176B87",
        borderRadius: 5,
        color: "#DAFFFB",
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    buttonText: {
        color: "#fff",
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31cf67",
        alignItems: 'center',
        justifyContent: "center",
    },
    form: {
        width: '100%',
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42,
    },
    listEmptyText: {
        color: '#fff',
        fontSize: 14,
        textAlign: "center",
    }

});