import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ThemeColors from "../../constants/themeColor";

const CardDetailItem = (props) => {
    
    return (
        <View style={styles.cartItem}>
            
                <View style={styles.itemData}>
                    <Image source = {{uri:props.image}} style = {styles.image} /> 
                    </View>
                    <View style={styles.InfoData}>
                    <Text style={styles.title}>{props.name}</Text>
                    <Text style={styles.amount}> Rs. {props.amount} </Text>
                    <Text style={styles.title}>{props.date}</Text>
                    <Text style={styles.title}>Total: {props.sum}</Text>
                    <Text style={styles.title}>Number: {props.quantity}</Text>
                    </View>
                    {props.quantity > 1 && (<View> 

                                            </View>) }
                
                <View style={styles.itemData}>
                    
                    
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
        alignItems: "center",
        // marginHorizontal:20,
        marginTop:10,
        width: 350,
        height: 180,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        elevation: 5,
        borderRadius: 15,
    },
    itemData: {
        flexDirection: "row",
        
        alignItems: "center",
        marginRight: 10,
        marginLeft:25,
    },
    InfoContainer: {
        
        flexDirection: "row",
        justifyContent: "space-around",
        width: '100%',
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
        color: ThemeColors.SpotifyGreen,
    },
    deleteButton: {
        marginLeft: 30,
    },
    image: {
        height: 120,
        width: 120,
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
    InfoData:{
        
        margin:7,
        height:600,
        width:300,
        justifyContent: "center",
        alignItems: "flex-start",
    },
});

export default CardDetailItem;
