import React , {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import CustomHeaderButton from '../../components/HeaderButton';
import {useSelector} from 'react-redux';
import CartItem from '../../components/shop/cartItem';
import OrderItem from '../../components/shop/orderItem';


const OrderScreen = props =>{
    const orders = useSelector(state => state.order.orders);
    

    
    console.log("Order Screen");
    console.log(orders);
    const renderOrderItem = itemData =>{
        console.log(itemData.item.items)
            return (
                <View style={styles.list}>
                <OrderItem 
                          date={itemData.item.readableDate} 
                          amount ={itemData.item.totalAmount} 
                          items ={itemData.item.items}
                          />
                </View>
            );
        
       
    }
    return (
    <View style={styles.screen}>
        <Text style={styles.text}>Orders Screen</Text>
        <View style={styles.ListContainer}>
            <FlatList data = {orders} 
                      renderItem={renderOrderItem}
                       />
        </View>

    </View>);
};

OrderScreen.navigationOptions = navData =>{
    return {
        headerTitle:"Orders",
        headerLeft:()=> 
        <CustomHeaderButton IconName="ios-menu"  IconSize={28} onTouch={() => {
            navData.navigation.toggleDrawer();
            }} />,  
    };
};


const styles = StyleSheet.create({
    screen:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
    },
    list:{
        flex:1,
        width: 400,
        justifyContent: 'center',
        alignItems:'center',
        

        },
    ListContainer:{
        flex:1,
        width:500,
        justifyContent:'center',
        alignItems:'center',
    },
});


export default OrderScreen