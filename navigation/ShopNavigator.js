import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserCart from '../screens/User/userCart';
import ThemeColors from '../constants/themeColor';
import {Entypo, FontAwesome5} from '@expo/vector-icons';

//.. ShopNavigator Stack with the HomeScreen and ProductDetails Screen
const DefaultHeaderStyle =  {headerTitle:'Cart',
headerStyle:{
    backgroundColor:ThemeColors.SpotifyGreen,
},
headerTintColor:'white'};
const ShopNavigator = createStackNavigator({
    HomeScreen: {screen: HomeScreen, 
                defaultNavigationOptions:{
                    backgroundColor:'black'
                }},
    ProductList:ProductList,
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
    tabBarOptions:{
        inactiveBackgroundColor:'white',
        activeBackgroundColor:ThemeColors.SpotifyGreen,
        inactiveTintColor:ThemeColors.SpotifyGreen,
        activeTintColor:ThemeColors.SpotifyGreen,
        inactiveTintColor: 'white'
    }
});


export default createAppContainer(TabNav);