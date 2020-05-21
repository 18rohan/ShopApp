import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ThemeColors from "../../constants/themeColor";

const CardDetailItem = (props) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.InfoContainer}>
                <View style={styles.itemData}>
                    {/* <Image source = {props.imageurl} style = {styles.image} /> */}
                    <Text style={styles.amount}> Rs. {props.amount} </Text>
                </View>
                <View style={styles.itemData}>
                    <Text style={styles.title}>{props.date}</Text>
                    <Text style={styles.title}>{props.items.name}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.ShowDetailsButton}
                onPress={() => {
                    props.setDetailOrder((prevState) => !prevState);
                    console.log(props.items.productName);
                }}
            >
                <View>
                    <Text style={styles.buttonTint}>Show Details</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
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
        height: 250,
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

export default CardDetailItem;
