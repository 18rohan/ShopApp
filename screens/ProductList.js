import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BigCards from "../components/BigCards";
import { PRODUCTS } from "../data/dummy_data";
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

ProductList.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("CategoryId");
    //  const availableProducts = useSelector(state =>state.products.availableProducts);
    const displayedData = PRODUCTS.find(
        (product) => product.categoryId == catId
    );

    return {
        headerTitle: "Products",
    };
};

export default ProductList;
