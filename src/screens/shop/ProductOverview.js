import React from 'react';
import {Button, FlatList, Platform, View} from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButtons';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/action/cart';
import Color from "../../constants/Colors";


const ProductOverview = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch  = useDispatch();
    const selectItemHandler =(id, title) => {
      props.navigation.navigate('ProductDetail',{
        productId: id,
        productTitle: title
      });
    };

    return (
      <FlatList data = {products}
                keyExtractor = {item => item.id}
                renderItem = {itemData => (
                  <ProductItem
                  image={itemData.item.imageUrl}
                  title={itemData.item.title}
                  price={itemData.item.price.toFixed(2)}
                  onSelect={() => {
                    selectItemHandler(itemData.item.id, itemData.item.title);
                  }}
                  // onAddToCart={() => {
                  //   dispatch(cartActions.addToCart(itemData.item));
                  // }}
                  >
                    <Button color = {Color.primary}
                            title= 'View details'
                            onPress={() => {
                              selectItemHandler(itemData.item.id, itemData.item.title);
                            }}/>
                    <Button color = {Color.primary}
                            title= 'To cart'
                            onPress={() => {
                              dispatch(cartActions.addToCart(itemData.item));
                            }}/>
                  </ProductItem>
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
