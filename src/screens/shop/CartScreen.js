import React from 'react';
import {Text, Button, View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItems";
import * as cartAction from'../../store/action/cart';
import * as ordersAction from '../../store/action/orders';
import Card from '../../components/UI/Card';


const CartScreen = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
     transformedCartItems.push({
       productId: key,
       productTitle: state.cart.items[key].productTitle,
       productPrice: state.cart.items[key].productPrice,
       quantity: state.cart.items[key].quantity,
       sum: state.cart.items[key].sum
     })
    }
    return transformedCartItems.sort((a, b) =>
    a.productId > b.productId ? 1 : -1
    );
  });

  const dispatch = useDispatch();

  return(
    <View style = {styles.screen}>
      <Card style ={ styles.summery}>
        <Text style ={ styles.summaryText}>
          Total:<Text style = {styles.amount}>${Math.round(cartTotalAmount.toFixed(2)*100/100)}</Text></Text>
        <Button
          color ={Colors.accent}
          title=' Order Now'
          disabled = { cartItems.length === 0 }
          onPress={() => {
            dispatch(ordersAction.addOrder(cartItems, cartTotalAmount))
            props.navigation.navigate('Orders')
          }}
        />
      </Card>
      <View>
        <FlatList data = {cartItems}
                  keyExtractor={item => item.productId}
                  renderItem={itemData =>
                    <CartItem
                      quantity={itemData.item.quantity}
                      title={itemData.item.productTitle}
                      amount={itemData.item.sum}
                      deletable
                      onRemove={() =>{
                        dispatch(cartAction.removeFromCart(itemData.item.productId));
                      }}
                    />
                  }
        />
      </View>
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'Your Cart'
};

const styles = StyleSheet.create({
  screen:{
    margin:20
  },
  summery:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
    padding:10,
    margin: 7
  },
  summaryText:{
    fontSize:18,
  },
  amount:{
    color: Colors.primary
  }
});

export default CartScreen;
