import React from 'react';
import { Text, FlatList, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderButtons, item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButtons';

const OrdersScreen = props => {
  const orders = useSelector(state => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtracotr = {item => item.id}
      renderItem={itemData => <Text>
        {itemData.item.totalAmount}
      </Text>}
    />
  );
};

OrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Orders',
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
  }
};

export default OrdersScreen;
