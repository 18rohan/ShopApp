import React from 'react';
import {View, Text, StyleSheet, Platform, SafeAreaView, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';
import OrderScreen from '../screens/User/OrdersScreen'
import EditUserProduct from '../screens/User/EdituserProduct';
import UserProducts from '../screens/User/UserProducts';
import AuthScreen from '../screens/User/AuthScreen';
import TestEditProduct from '../screens/User/Test_editUserProduct';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserCart from '../screens/User/userCart';
import ThemeColors from '../constants/themeColor';
import {useDispatch} from 'react-redux';
import * as AuthActions from '../store/actions/Auth';
import {Entypo, Ionicons, FontAwesome5, Feather} from '@expo/vector-icons';




//.. ShopNavigator Stack with the HomeScreen and ProductDetails Screen
const DefaultHeaderStyle =  {
headerStyle:{
    backgroundColor:Platform.OS == 'android' ? ThemeColors.SpotifyGreen : 'white',
},
headerTintColor:Platform.OS =='android' ?'white' : ThemeColors.SpotifyGreen,
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
// .. UserProducts Stack Navigation
const UserSavedProducts = createStackNavigator({
    UserProducts : UserProducts,
    EditUserProduct : EditUserProduct,


}, {navigationOptions:{
    drawerIcon: drawerConfig => (
        <Feather name="command" size={24}/>
    )
},
    defaultNavigationOptions:DefaultHeaderStyle,
    
});

// Test Stack Navigator ************************************************

const TestNav = createStackNavigator({
  Test:TestEditProduct,
},{
  defaultNavigationOptions:DefaultHeaderStyle,
})



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
        activeBackgroundColor:Platform.OS == 'android' ? ThemeColors.SpotifyGreen : 'white',
        inactiveTintColor:Platform.OS == 'android' ? ThemeColors.SpotifyGreen: 'black',
        activeTintColor:ThemeColors.SpotifyGreen,
        inactiveTintColor: 'white'
    }
});


const MainNav = createDrawerNavigator({
    home:TabNav,
    order: OrderNav,
    Admin: UserSavedProducts,
    
},{
  contentOptions:{
    activeTintColor: ThemeColors.SpotifyGreen
  },
  contentComponent: props =>{
    const dispatch = useDispatch();
    return (
          <View style={{flex:1}}>
          <SafeAreaView forceInset={{top:'always', horizontal:'never'}}>
          <DrawerItems {...props} />
          <Button title="Logout"  color={ThemeColors.SpotifyGreen} onPress={() => {
            
            dispatch(AuthActions.Logout());
            props.navigation.navigate('Auth');
          }}/>
          </SafeAreaView>
          </View>
      );
  },
})

const AuthNav = createSwitchNavigator({
  Auth:AuthScreen,
  shop:MainNav,
})



export default createAppContainer(AuthNav);