import React , { useState, useEffect }from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import BigCards from "../components/BigCards";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../data/dummy_data";
import { useSelector, useDispatch } from "react-redux";
import * as ProductActions from '../store/actions/products';
import ThemeColors from '../constants/themeColor';

const ProductList = (props) => {
   const [isLoading, setIsLoading] = useState(false);
    const Dispatch = useDispatch(false);

    useEffect(() => {
        const getData = async () =>{
            setIsLoading(true);
            await Dispatch(ProductActions.fetchProduct());
            setIsLoading(false);
        };
        getData();
    },[Dispatch]);

    
    
    const catId = props.navigation.getParam("CategoryId");

    const availableProducts = useSelector(
        (state) => state.products.availableProducts
    );
    const displayedData = availableProducts.filter(
        (product) => product.categoryId.indexOf(catId) >= 0
    );

    // if (!isLoading && displayedData.length === 0){
    //     return (
    //         <View style={styles.AppLoadingIndicator}>
    //         <Text style={{fontSize:25, fontWeight:'200', color:ThemeColors.SpotifyGreen}}> ConnectionError!!</Text>
    //         </View>
    //         );
    // }

    console.log(displayedData);
    if(isLoading){
        return (
            <View style={styles.AppLoadingIndicator}>
            <ActivityIndicator size="large" color={ThemeColors.SpotifyGreen} />
            </View>
            );
    }
    if(!isLoading && displayedData.length === 0){
        return (
            <View style={styles.AppLoadingIndicator}>
            <Text style={{fontSize:24, color: ThemeColors.SpotifyGreen, fontWeight:'200'}}>No Products added!! Please Add some Products</Text>
            </View>
            );
    }
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

const styles = StyleSheet.create({
    AppLoadingIndicator:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },
})

export default ProductList;
