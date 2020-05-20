import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../components/shop/cartItem';
import * as CartActions from '../../store/actions/Cart';
import * as OrderActions from '../../store/actions/ActionOrder';



const UserCart = props =>{
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    // const cartItems1 = useSelector(state => state.cart.items);

    const cartItems = useSelector(state => {
        const transformedCartItem = [];
        for (const key in state.cart.items){
            transformedCartItem.push({
                productId: key,
                productName:state.cart.items[key].name,
                productPrice : state.cart.items[key].price,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
                imageurl: state.cart.items[key].image
            })
        }
        return transformedCartItem.sort((a, b) => a.productId > b.productId ? 1 : -1);
    });
    console.log("Cart Screen");
    console.log(cartItems);
    console.log(cartTotalAmount);
    const Dispatch = useDispatch();
    const renderCartItem = itemData => {
        return (
            <View style={styles.FlatlistItem}>
                <CartItem   
                      quantity={itemData.item.quantity} 
                      name={itemData.item.productName} 
                      price={itemData.item.productPrice}
                      imageurl={itemData.item.imageurl}
                      amount ={itemData.item.amount}
                      onRemove = {()=>{
                         Dispatch(CartActions.removeFromCart(itemData.item.productId));
                      }}
                      />
                      
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
                     Dispatch(OrderActions.addOrder(cartItems, cartTotalAmount));
                     console.log("Order Button Pressed")
                 }} 
                 disabled={cartItems.length === 0}/>
             </View>
             <View style={styles.ListHeaderContainer}>
             <Text style={styles.cartListHeading}>Cart List</Text>
             </View>
             
             <View style={styles.cartListContainer}>
            <FlatList data={cartItems} 
                      renderItem={renderCartItem} 
                      keyExtractor={item => item.productId} 
                      quantity={cartItems.quantity} 
                      name={cartItems.productName} 
                      onRemove = {()=>{
                          console.log("Delete Presssed");
                        //   Dispatch(CartActions.removeFromCart(cartItems.productId))
                      }}
                      amount={cartItems.productPrice}
                      imageurl={cartItems.imageurl}
                        style={styles.list}
                      />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    summaryText:{
        fontSize: 20,
        fontWeight:'bold',
    },
    FlatlistItem:{
        width: '100%',
        height:140},
    summary:{
        flexDirection: 'row',
        marginLeft:25,
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
    list:{
        height:900,
    },
    cartListHeading:{
        fontSize:23, 
        fontWeight:'bold',
    },
    cartListContainer:{
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:25,
        marginRight:50,
        width: 420,

    },
    ListHeaderContainer:{
        marginBottom:6,
        marginTop:25,
        justifyContent:'center',
        alignItems:'center',
    },
});



export default UserCart;