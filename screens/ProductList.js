import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BigCards from '../components/BigCards';
import {PRODUCTS} from '../data/dummy_data';
import {useSelector} from 'react-redux';


const ProductList = props => {
    const catId = props.navigation.getParam('CategoryId');
    const availableProducts = useSelector(state => state.products.availableProducts);
    const displayedData = availableProducts.filter(product => product.categoryId.indexOf(catId) >= 0);
    
    return (
        <BigCards listData={displayedData} navigation={props.navigation} />
    );
};



export default ProductList;