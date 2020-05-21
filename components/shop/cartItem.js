import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Image source={props.imageurl} style={styles.image} />

                <Text style={styles.title}> {props.name} </Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.amount}>{props.amount}</Text>
                <Text style={styles.quantity}>{props.quantity} </Text>
                <TouchableOpacity
                    onPress={props.onRemove}
                    style={styles.deleteButton}
                >
                    <Ionicons name="ios-trash" size={23} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        // marginHorizontal:20,
        width: 370,
        height: 130,
    },
    itemData: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantity: {
        fontSize: 16,
        fontWeight: "300",
    },
    title: {
        fontSize: 15,
        fontWeight: "200",
    },
    amount: {
        fontSize: 16,
        color: "red",
    },
    deleteButton: {
        marginLeft: 30,
    },
    image: {
        height: 80,
        width: 80,
    },
});

export default CartItem;
