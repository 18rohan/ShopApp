import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ThemeColors from "../../constants/themeColor";
import CardDetailItem from "./orderItemDetail";

const CardItem = (props) => {
    const [DetailOrder, setDetailOrder] = useState(false);

    return (
        <View style={props.style.cartItem}>
            <View style={props.style.InfoContainer}>
                <View style={props.style.itemData}>
                    {/* <Image source = {props.imageurl} style = {styles.image} /> */}
                    <Text style={props.style.amount}> Rs. {props.amount} </Text>
                </View>
                <View style={styles.itemData}>
                    <Text style={styles.title}>{props.date}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.ShowDetailsButton}
                onPress={() => {
                    props.setDetailOrder((prevState) => !prevState);
                }}
            >
                <View>
                    <Text style={styles.buttonTint}>Show Details</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const OrderItem = (props) => {
    const [DetailOrder, setDetailOrder] = useState(false);
    if (DetailOrder) {
        return (
            <View>
                <CardDetailItem
                    style={styles}
                    amount={props.amount}
                    date={props.date}
                    setDetailOrder={setDetailOrder}
                    items={props.items}
                />
            </View>
        );
    } else {
        return (
            <CardItem
                style={styles}
                amount={props.amount}
                date={props.date}
                setDetailOrder={setDetailOrder}
            />
        );
    }
};

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: "white",

        justifyContent: "space-between",
        alignItems: "center",
        // marginHorizontal:20,
        marginTop: 30,
        width: 350,
        height: 80,
        shadowColor: "black",
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.6,
        elevation: 5,
        borderRadius: 15,
    },
    itemData: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
    },
    InfoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: 390,
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
    ShowDetailsButton: {
        backgroundColor: ThemeColors.SpotifyGreen,
        width: "90%",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonTint: {
        color: "white",
        fontWeight: "bold",
    },
});

export default OrderItem;
