import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { PRODUCTS } from "../data/dummy_data";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import ThemeColors from "../constants/themeColor";
import * as CartActions from "../store/actions/Cart";
import CustomHeaderButton from "../components/HeaderButton";
import {useSelector} from "react-redux";

const ProductDetails = (props) => {
    const prodId = props.navigation.getParam("ProductId");
    const DisplayedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === prodId));
    console.log("GET NAME");
    console.log(DisplayedProduct.name);

    return (
        <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={styles.ProducCard}>
            <View style={styles.ProductTitleContainer}>
            <Text style={styles.ProductTitleText}>{DisplayedProduct.name}</Text>
            </View>
                <ProductDetailsCard
                    product={DisplayedProduct}
                    imageUrl={DisplayedProduct.imageurl}
                    price={DisplayedProduct.price}
                    navigation={props.navigation}
                >
                    {DisplayedProduct.name}
                </ProductDetailsCard>
            </View>
            <View style={styles.Specifications}>
                <Text style={styles.text}>Specifications</Text>
            </View>
        </ScrollView>
    );
};
ProductDetails.navigationOptions = (navData) => {
    const prodId = navData.navigation.getParam("ProductId");
    const currentProduct = PRODUCTS.find(prod => prod.id === prodId);
    return {
        headerTitle: " ",
        headerRight: () => (
            <CustomHeaderButton
                IconName="ios-cart"
                IconSize={28}
                onTouch={() => {
                    navData.navigation.navigate("User");
                }}
            />
        ),
    };
};
const styles = StyleSheet.create({
    specifications: {
        height: 500,
    },
    ProducCard: {
        height: 600,
        marginBottom: 50,
    },
    text: {
        fontSize: 25,
        fontWeight: "300",
    },
    ProductTitleText:{
        fontSize:25,
        fontWeight: "300",
        color: ThemeColors.SpotifyGreen,
    },
    ProductTitleContainer:{
        marginTop:7,
        marginLeft:5,
    },
});
export default ProductDetails;
