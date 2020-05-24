import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BigCards from "../components/BigCards";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../data/dummy_data";
import { useSelector } from "react-redux";

const ProductList = (props) => {
    const catId = props.navigation.getParam("CategoryId");
    const availableProducts = useSelector(
        (state) => state.products.availableProducts
    );
    const displayedData = availableProducts.filter(
        (product) => product.categoryId.indexOf(catId) >= 0
    );
    console.log(displayedData);
    return <BigCards listData={displayedData} navigation={props.navigation} />;
};

ProductList.navigationOptions = (navData) => {
    const catId = navData.navigation.getParam("CategoryId");
    const currentCategory = PRODUCT_CATEGORIES.find(cat => cat.id === catId)
    // const availableProducts = useSelector(
    //     (state) => state.products.availableProducts
    // );
    // const displayedData = PRODUCTS.find(
    //     (product) => product.categoryId == catId
    // );

    return {
        headerTitle: currentCategory.name,
    };
};

export default ProductList;
