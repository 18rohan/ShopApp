import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import ThemeColors from "../constants/themeColor";
import * as CartActions from "../store/actions/Cart";
import { useDispatch } from "react-redux";

const ProductDetailsCard = (props) => {
    const Dispatch = useDispatch();
    const Product = props.product;
    console.log(Product);
    return (
        
            <View style={styles.Detailscard}>
                <View style={styles.imageContainer}>
                    {/* Image View */}
                    <Image source={{uri:props.imageUrl}} style={styles.image} />
                    <Text style={{ fontSize: 25, fontWeight: "300" }}>
                        {props.children}
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "500",
                            color: ThemeColors.SpotifyBlack,
                        }}
                    >
                        Rs. {props.price}
                    </Text>
                </View>
                <View style={styles.textContainer}>{/* Product Name */}</View>
                <View style={styles.IconsContainer}>
                   
                    <TouchableOpacity
                        style={styles.cartIconContainer}
                        onPress={() => {
                            // console.log("Cart pressed");
                            Dispatch(CartActions.addToCart(props.product));
                        }}
                    >
                        <View>
                            {/* Product : PUT IN CART */}
                            <Ionicons name="ios-cart" size={35} color="white" />

                            <Text style={styles.buttonText}>Add To Cart</Text>
                        </View>
                    </TouchableOpacity>


                      <TouchableOpacity
                        style={styles.cartIconContainer}
                        onPress={() => {
                            // console.log("Cart pressed");
                            Dispatch(CartActions.addToCart(props.product));
                        }}
                    >
                        <View>
                            {/* Product : PUT IN CART */}
                            <Fontisto name="shopping-bag" size={28} color="white" />
                            <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>Buy</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


               
                </View>
            </View>
          
         
        
    );
};

const styles = StyleSheet.create({
    Detailscard: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 0.5,
        marginBottom:15,
        paddingBottom:25,
    },
    InfoContainer: {
        height: 100,
        flexDirection: "row",
        width: "100%",
    },
    SellerContainer: {
        width: "100%",
        height: 100,
        marginTop: 95,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginRight: 20,
    },
    inStockContainer: {
        width: "100%",
        height: 100,
        marginTop: 55,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 20,
    },
    IconsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    cartIconContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 25,
        marginLeft: 30,
        width: 120,
        height: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: ThemeColors.SpotifyGreen,
        backgroundColor: ThemeColors.SpotifyGreen,
        marginRight: 40,

    },
    buyIconContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        marginLeft: 30,
        width: 120,
        height: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: ThemeColors.SpotifyGreen,
        backgroundColor: ThemeColors.SpotifyGreen,
        marginRight: 40,
    },

    imageContainer: {
        width: "100%",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingTop:150,
    },
    image: {
        width: "90%",
        height: 350,
        resizeMode: "cover",
    },
    textContainer: {
        marginLeft: 50,

        width: "80%",
        justifyContent: "space-around",
        alignItems: "flex-start",
        flex: 1,
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "200",
    },
    buttonTextContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginTop:8,
    },
});
export default ProductDetailsCard;


                    <TouchableOpacity style={styles.buyIconContainer}>
                        <View>
                            <Fontisto
                                name="shopping-bag"
                                size={25}
                                color="white"
                            />
                            <Text style={styles.buttonText}>Buy</Text>
                        </View>
                    </TouchableOpacity>
