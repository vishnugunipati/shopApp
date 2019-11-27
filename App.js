import React from 'react';
import { StyleSheet, View } from 'react-native';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import productReducer from './src/store/reducers/products';
import cartReducer from './src/store/reducers/cart';
import ShopNavigator from './src/navigations/shopNavigator'

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
    <ShopNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
