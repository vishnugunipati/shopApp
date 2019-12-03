import React from 'react';
import {FlatList, Platform} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import {HeaderButtons} from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButtons";

const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);

  return(

    <FlatList data={userProducts} keyExtractor = {item => item.id} renderItem = {itemData =>
      <ProductItem
        image ={itemData.item.imageUrl}
        title = {itemData.item.title}
        price={itemData.item.price}
        onViewDetail={() => {}}
        onAddToCart={() => {}}
      />}/>
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
    )
  }

};

export default UserProductsScreen;
