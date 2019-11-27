import React from 'react';
import { StyleSheet, View } from 'react-native';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import productReducer from './src/store/reducers/products';
import ShopNavigator from './src/navigations/shopNavigator'

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer, composeWithDevTools());

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
