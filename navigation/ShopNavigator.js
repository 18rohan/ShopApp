import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';
import OrderScreen from '../screens/User/OrdersScreen'
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserCart from '../screens/User/userCart';
import ThemeColors from '../constants/themeColor';
import {Entypo, Ionicons, FontAwesome5} from '@expo/vector-icons';




//.. ShopNavigator Stack with the HomeScreen and ProductDetails Screen
const DefaultHeaderStyle =  {headerTitle:'Cart',
headerStyle:{
    backgroundColor:ThemeColors.SpotifyGreen,
},
headerTintColor:'white',
activeTintColor: ThemeColors.SpotifyGreen
};
const ShopNavigator = createStackNavigator({
    HomeScreen: {screen: HomeScreen, 
                defaultNavigationOptions:{
                    backgroundColor:'black'
                }},
    ProductList:{screen:ProductList,
                defaultNavigationOptions:{
                    headerTitle:"Technology"
                }},
    ProductDetails:ProductDetails,
    


},{
    
    defaultNavigationOptions: DefaultHeaderStyle
});

//.. UseNavigator Stack with the user Cart and user settings Screen
const User = createStackNavigator({
    UserCart:UserCart,
},{
    defaultNavigationOptions:DefaultHeaderStyle,
});
// ---------------------------------------------------------------------------------------
// .. Orders Navigator Stack: with Orders Screens

const OrderNav = createStackNavigator({
    order: {screen: OrderScreen}
},{ 
    navigationOptions:{
        drawerIcon  : drawerConfig => (
        <Ionicons name="ios-list" size={24}/>
        )
        
    },
    defaultNavigationOptions: DefaultHeaderStyle,
})
// ----------------------------------------------------------------------------------------

// Bottom Tab Bar Navigation: with Home Screen Stack(Shop Navigation Stack) and UserCart stack
const TabNav = createBottomTabNavigator({
    Home: {screen: ShopNavigator,
           navigationOptions:{
               
               tabBarIcon: (tabInfo) =>{
                   return (
                    <Entypo name="shop" size={24} />
                   );
               }
           }, },
    User: {screen:User,
           navigationOptions:{
              tabBarIcon: (tabInfo) =>{
                  return (
                      <FontAwesome5 name="user-alt" size={24}/>
                  );
              }
           }},
},{
    navigationOptions:{
        drawerIcon: drawerConfig => (
            <Ionicons name="ios-home" size={24} color={drawerConfig.tintColor} />
        )
    },
    tabBarOptions:{
        inactiveBackgroundColor:'white',
        activeBackgroundColor:ThemeColors.SpotifyGreen,
        inactiveTintColor:ThemeColors.SpotifyGreen,
        activeTintColor:ThemeColors.SpotifyGreen,
        inactiveTintColor: 'white'
    }
});

const MainNav = createDrawerNavigator({
    home:TabNav,
    order: OrderNav
})


export default createAppContainer(MainNav);