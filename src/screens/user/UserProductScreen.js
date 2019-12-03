import React from 'react';
import {Button, FlatList, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import {HeaderButtons} from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButtons";
import Color from "../../constants/Colors";
import * as productActions from "../../store/action/products";

const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = (id) => {
    props.navigation.navigate('EditProduct',{ productId: id});
  };

  return(

    <FlatList data={userProducts} keyExtractor = {item => item.id} renderItem = {itemData =>
      <ProductItem
        image ={itemData.item.imageUrl}
        title = {itemData.item.title}
        price={itemData.item.price}
        onSelect={() => {
          editProductHandler(itemData.item.id);
        }}
      >
        <Button color = {Color.primary}
                title= 'Edit'
                onPress={() => {
                  editProductHandler(itemData.item.id);
                }}/>
        <Button color = {Color.primary}
                title= 'Delete'
                onPress={() => {
                  dispatch(productActions.deleteProduct(itemData.item.id))
                }}/>
      </ProductItem>
    }
    />
  )
};

UserProductsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Product',
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
        <item title = 'Add'
              iconName = { Platform.OS === 'android' ? 'md-create': 'ios-create'}
              onPress={() => {
                navData.navigation.navigate('EditProduct');
              }}
        />
      </HeaderButtons>
    )
  }

};

export default UserProductsScreen;
