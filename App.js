import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import userCart from './store/reducers/userCart';
import productReducers from './store/reducers/productReducers';
import ShopNavigator from './navigation/ShopNavigator';
import ReducerOrder from './store/reducers/ReducerOrders';
import ReduxThunk from 'redux-thunk';
import AuthReducer from './store/reducers/AuthReducer';

const rootReducer = combineReducers({
  products: productReducers,
  cart:userCart,
  order:ReducerOrder,
  auth:AuthReducer,

});

const store =createStore(rootReducer, applyMiddleware(ReduxThunk));
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
