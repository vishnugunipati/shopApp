import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import ProductOverview from '../screens/shop/ProductOverview';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyles: {
    backgroundColor: Platform.OS === 'android' ?  Colors.primary : ''
  },
  headerTintColor: Platform.OS === 'android' ?  Colors.primary : ''
};


const ProductsNavigator = createStackNavigator({
    productOverviewScreen: ProductOverview,
    ProductDetail: ProductDetailScreen,
    Cart : CartScreen
  },
  {
    navigationOptions:{
      drawerIcon: drawerConfig => <Ionicons
        name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        size={23}
        color={drawerConfig.tintColor}
      />
    },
    defaultNavigationOptions: defaultNavOptions

});

const OrdersNavigator = createStackNavigator({
  Orders: OrdersScreen
  },
  {
    navigationOptions:{
      drawerIcon: drawerConfig => <Ionicons
        name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
        size={23}
        color={drawerConfig.tintColor}
      />
    },
    defaultNavigationOptions: defaultNavOptions
  }
  );

const AdminNavigator = createStackNavigator({
    UserProduct: UserProductsScreen
  },
  {
    navigationOptions:{
      drawerIcon: drawerConfig => <Ionicons
        name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
        size={23}
        color={drawerConfig.tintColor}
      />
    },
    defaultNavigationOptions: defaultNavOptions
  }
);


const ShopNavigator = createDrawerNavigator({
  Products: ProductsNavigator,
  Orders: OrdersNavigator,
  Admin: AdminNavigator
},{
  contentOptions:{
    activeTintColor: Colors.primary
  }
});

export default createAppContainer(ShopNavigator);


