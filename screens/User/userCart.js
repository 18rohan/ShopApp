import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';



const UserCart = props =>{
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItem = [];
        for (const key in state.cart.items){
            transformedCartItem.push({
                productId: key,
                quantity: state.cart.items[key].quantity,
                productName:state.cart.items[key].ProductName,
                productPrice : state.cart.items[key].productPrice,
                sum: state.cart.items[key].sum,
            })
        }
        return transformedCartItem;
    });
    console.log(cartItems);
    const renderCartItem = itemData => {
        return (
            <View style={{width: 300, height:90}}>
                <Text>{itemData.item.productName}</Text>
            </View>
        );
    };
    return(
        <View style={styles.screens}>
             <View style={styles.summary}>
                 <Text style={styles.summaryText}>
                     Total: <Text style= {styles.totalAmountText}>Rs.{cartTotalAmount.toFixed(2)}</Text>
                 </Text>
                 <Button title="ORDER NOW" onPress={()=>{
                     console.log(cartItems.productName);
                 }} 
                 disabled={cartItems.length === 0}/>
             </View>
             <View style={styles.cartListContainer}>
             <Text style={styles.cartListHeading}>Cart List</Text>
            <FlatList data={cartItems} renderItem={renderCartItem} keyExtractor={item => item.productId} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    summaryText:{
        fontSize: 20,
        fontWeight:'bold',
    },
    summary:{
        flexDirection: 'row',
        marginLeft:20,
        justifyContent:'space-around',
        alignItems:'center',
        paddingBottom:2,
        backgroundColor:'white',
        marginTop:15,
        width:'90%',
        height: 100,
        shadowColor:'black',
        shadowOpacity:0.6,
        shadowOffset:{width:3, height:4},
        elevation:5,
        borderRadius:20,
        alignItems:'center',
    },
    totalAmountText:{
        color:'#1DB954',
        fontSize:19,
    },
    cartListHeading:{
        fontSize:23, 
        fontWeight:'bold',
    },
    cartListContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
    },
});



export default UserCart;