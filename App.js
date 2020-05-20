import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import userCart from './store/reducers/userCart';
import productReducers from './store/reducers/productReducers';
import ShopNavigator from './navigation/ShopNavigator';
import ReducerOrder from './store/reducers/ReducerOrders';

const rootReducer = combineReducers({
  products: productReducers,
  cart:userCart,
  order:ReducerOrder,

});

const store =createStore(rootReducer);
export default function App() {
  return (
    
    <Provider store={store}>   
    <ShopNavigator />
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
