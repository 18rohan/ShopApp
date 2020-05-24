import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,Platform } from "react-native";
import ThemeColors from "../../constants/themeColor";
import CardDetailItem from "./orderItemDetail";
import CartItem from "../../components/shop/cartItem";

const OrderItem = (props) => {
    const [DetailOrder, setDetailOrder] = useState(false);

    return (
        <View style={styles.cartItem}>
            <View style={styles.InfoContainer}>
                <View style={styles.itemData}>
                    {/* <Image source = {props.imageurl} style = {styles.image} /> */}
                    <Text style={styles.amount}> Rs. {props.amount} </Text>
                </View>
                <View style={styles.itemData}>
                    <Text style={styles.title}>{props.date}</Text>

                </View>
            </View>
            <TouchableOpacity
                            style={styles.ShowDetailsButton}
                            onPress={()=>{
                                setDetailOrder(prevState => !prevState);
                            }}
                        >
                            <View style={styles.textContainer}>
                                <Text style={styles.buttonTint}>
                                    {DetailOrder ? "HIDE" : "SHOW"}
                                </Text>
                            </View>
                        </TouchableOpacity>
            
        {DetailOrder && <View style={styles.detailContainer}>
                       {props.items.map(item => <CardDetailItem name={item.productName} image={item.imageurl} amount={item.productPrice} sum={item.sum} quantity={item.quantity}/>)}
                   </View>}     
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
        height: 80,
        shadowColor: "black",
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.6,
        elevation: 5,
        borderRadius: 15,
    },
    detailView:{
        marginBottom:10,
    },
    itemData: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
        marginTop:10,

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
        fontSize: Platform.OS === "ios" ? 15 : 10,
        fontWeight: "200",
    },
    amount: {
        fontSize: 20,
        color: ThemeColors.StarbucksGreen,
        fontWeight: "bold"
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
        width: 300,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    buttonTint: {
        color: "white",
        fontWeight: "bold",
        fontSize:15,
    },
    detailContainer:{
        marginTop:20,
    },
    textContainer:{
        flex:1,
        width:'100%',
        justifyContent: "center",
        marginLeft:250,
        
    },
   
});

export default OrderItem;
