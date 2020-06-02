import React, { useState, useEffect, useCallback } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Button,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import CustomHeaderButton from "../../components/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/shop/cartItem";
import OrderItem from "../../components/shop/orderItem";
import ThemeColors from "../../constants/themeColor";
import * as OrderActions from "../../store/actions/ActionOrder";
import CardDetailItem from "../../components/shop/orderItemDetail";

const OrderScreen = (props) => {
    const orders = useSelector((state) => state.order.orders);
    const [isLoading, setIsLoading] = useState();
    const dispatch = useDispatch();
    console.log("Order Screen");
    
    useEffect(() => {
        props.navigation.addListener("willFocus", getData);
    });

    const getData = useCallback(async () => {
        setIsLoading(true);
        await dispatch(OrderActions.fetchOrder());
        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        getData();
    }, [dispatch]);

    if (isLoading) {
        return (
            <View style={styles.AppLoadingIndicator}>
                <ActivityIndicator
                    size="large"
                    color={ThemeColors.SpotifyGreen}
                />
            </View>
        );
    }
    if (orders.length === 0){
        return (
            <View style={{justifyContent: 'center',alignItems: 'center', marginTop:350}}>
            <Text style={{fontSize:25, fontWeight:'bold', color:ThemeColors.SpotifyGreen}}> Add Some Orders!!</Text>
            </View>
            );

    }

    const renderOrderItem = (itemData) => {
        return (
            
                <View style={styles.list}>
                    {itemData.item.items.map(item => <CardDetailItem 
                                                name={item.productName} 
                                                image={item.imageurl} 
                                                amount={item.productPrice} 
                                                sum={item.sum} 
                                                quantity={item.quantity}/>
                                                )}
                       
                    
                </View>
            
        );
    };
    return (
        <View style={styles.screen}>
            

            <View style={styles.ListContainer}>
                <FlatList
                    data={orders}
                    renderItem={renderOrderItem}
                    
                    showsHorizontalScrollIndicator={false}
                />
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
        marginLeft:25
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    list: {
        flex: 1,
        width: 450,
        height: 200,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: 30,
    },
    ListContainer: {
        flex: 1,
        width: 500,

        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    ShowDetailsButton: {
        backgroundColor: ThemeColors.SpotifyGreen,
        width: 300,
        height: 30,
        borderRadius: 15,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonTint: {
        color: "white",
        fontWeight: "bold",
    },
    HeaderContainer: {
        width: "100%",
        marginLeft: 25,
    },
    AppLoadingIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default OrderScreen;
