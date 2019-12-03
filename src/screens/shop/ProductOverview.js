import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButtons';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/action/cart';


const ProductOverview = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch  = useDispatch();
    return (
      <FlatList data = {products}
                keyExtractor = {item => item.id}
                renderItem = {itemData => (
                  <ProductItem
                  image={itemData.item.imageUrl}
                  title={itemData.item.title}
                  price={itemData.item.price.toFixed(2)}
                  onViewDetail={() => {
                    props.navigation.navigate('ProductDetail',{
                      productId: itemData.item.id,
                      productTitle: itemData.item.title
                    });
                  }}
                  onAddToCart={() => {
                    dispatch(cartActions.addToCart(itemData.item));
                  }}/>
                )}
      />
    );
};

ProductOverview.navigationOptions = navData => {
  return {
    headerTitle: 'All products',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent = { HeaderButton }>
        <item title = 'Menu'
              iconName = { Platform.OS === 'android' ? 'md-menu': 'ios-menu'}
              onPress={() => {
                navData.navigation.toggleDrawer();
              }}
        />
      </HeaderButtons>
    ),

    headerRight: (
      <HeaderButtons HeaderButtonComponent = { HeaderButton }>
        <item title = 'Cart'
              iconName = { Platform.OS === 'android' ? 'md-cart': 'ios-cart'}
              onPress={() => {
                navData.navigation.navigate('Cart')
              }}
        />
      </HeaderButtons>
    )
  };
};

export default ProductOverview;
