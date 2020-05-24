import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Button,
    ScrollView
} from "react-native";
import CustomHeaderButton from "../../components/HeaderButton";
import { useSelector } from "react-redux";
import CartItem from "../../components/shop/cartItem";
import OrderItem from "../../components/shop/orderItem";
import ThemeColors from "../../constants/themeColor";
import CardDetailItem from "../../components/shop/orderItemDetail";

const OrderScreen = (props) => {
    const orders = useSelector((state) => state.order.orders);
    

   
   
    const renderOrderItem = (itemData) => {
            return (
              <ScrollView >
                <View style={styles.list} >
                    <OrderItem
                        date={itemData.item.readableDate}
                        amount={itemData.item.totalAmount}
                        items={itemData.item.items}
                        
                    >
                    <Button title="Show Details" onPress={()=>{
                        
                            setOrderDetails(prevState => !prevState);  
                    }}
                    />

                    </OrderItem>
                  
                </View>
                </ScrollView>
                
            );
        
    };
    return (
        
        <View style={styles.screen}>
        <View style={styles.HeaderContainer}>
            <Text style={styles.text}>Orders Screen</Text>
            </View>
            
            <View style={styles.ListContainer}>
                <FlatList data={orders} renderItem={renderOrderItem} horizontal showsHorizontalScrollIndicator={false}/>
            </View>

        </View>
        
    );
};

OrderScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Orders",
        headerLeft: () => (
            <CustomHeaderButton
                IconName="ios-menu"
                IconSize={28}
                onTouch={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    list: {
        flex: 1,
        width: 450,
        height:500,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft:30,


    },
    ListContainer: {
        flex: 1,
        width: 500,
        justifyContent: "center",
        alignItems: "center",
        marginLeft:10,
    },
     ShowDetailsButton: {
        backgroundColor: ThemeColors.SpotifyGreen,
        width: 300,
        height: 30,
        borderRadius:15,
        marginTop:15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonTint: {
        color: "white",
        fontWeight: "bold",
    },
    HeaderContainer:{
        width:'100%',
        marginLeft:25,
        
        
    },
});

export default OrderScreen;
