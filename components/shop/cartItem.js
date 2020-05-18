import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const CartItem = props => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>QTY</Text> <Text style={styles.title}>TITLE</Text>
            </View>
            <View style={styles.itemData}>
            <Text style={styles.amount}>$AMT</Text>
            <TouchableOpacity onPress= {props.onRemove} style = {styles.deleteButton}>
                <Ionicons name='ios-trash'
                          size={23}
                          color="red" />

            </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    cartItem:{
        padding:10,
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal:20, 

    },
    itemData:{
        flexDirection: 'row',
        alignItems:'center',
    },
    quantity:{
        fontSize:16,
    },
    title:{
        fontSize:20, fontWeight:'bold'
    },
    amount:{
        fontSize:16,
    },
    deleteButton:{
        marginLeft: 30,
    },
});

export default CartItem;