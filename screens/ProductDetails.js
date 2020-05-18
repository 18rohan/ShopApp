import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {PRODUCTS} from '../data/dummy_data';
import ProductDetailsCard from '../components/ProductDetailsCard';
import {Ionicons, Fontisto} from '@expo/vector-icons';
import ThemeColors from '../constants/themeColor';
import * as CartActions from '../store/actions/Cart';







const ProductDetails = props => {
    
    const prodId = props.navigation.getParam('ProductId');
    const DisplayedProduct = PRODUCTS.find(prod => prod.id === prodId);
    
    
    return (
        
        <ScrollView style={{ backgroundColor:'white', flex:1}}>
        <View style={styles.ProducCard}>
       <ProductDetailsCard product = {DisplayedProduct} imageUrl={DisplayedProduct.imageurl} price ={DisplayedProduct.price} navigation={props.navigation}>{DisplayedProduct.name}</ProductDetailsCard>
       </View>
       <View style={styles.Specifications}>
           <Text style={styles.text}>Specifications</Text>
          
       </View>
      
       </ScrollView>
    );
};
ProductDetails.navigationOptions = navData => {
    return {
        headerTitle: 'ProductDetails',
    };
};
const styles = StyleSheet.create({
    specifications:{

        height:500,
        
    },
    ProducCard:{
        height:600,
        marginBottom:20,
    },
    text:{
        fontSize:25, 
        fontWeight:'300',
    },
})
export default ProductDetails;