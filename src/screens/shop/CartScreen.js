import React from 'react';
import {Text, Button, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItems";


const CartScreen = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  // const cartItems = useSelector(state => {
  //   const transformedCartItems = [];
  //   for (const key in state.cart.items) {
  //    transformedCartItems.push({
  //      productId: key,
  //      productTitle: state.cart.items[key].productTitle,
  //      productPrice: state.cart.itmes[key].productPrice,
  //      quantity: state.cart.items[key].quantity,
  //      sum: state.cart.items[key].sum
  //    });
  //   }
  //   return transformedCartItems;
  // });

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
    return transformedCartItems;
  });

  return(
    <View style = {styles.screen}>
      <View style ={ styles.summery}>
        <Text style ={ styles.summaryText}>
          Total:<Text style = {styles.amount}>${cartTotalAmount.toFixed(2)}</Text></Text>
        <Button
          color ={Colors.accent}
          title=' Order Now'
          disabled = { cartItems === 0 }/>
      </View>
      <View>
       <Text>cart items</Text>
      </View>
      <View>
        <FlatList data = {cartItems}
                  keyExtractor={item => item.productId}
                  renderItem={itemData => <CartItem
                    quantity={itemData.item.quantity}
                    title={itemData.item.productTitle}
                    amount={itemData.item.sum}
                    onRemove={() =>{
                    }}
                  />
                  }
        />

      </View>
    </View>
  );
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
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    margin: 7,
    backgroundColor:'white',
  },
  summaryText:{
    fontSize:18,
  },
  amount:{
    color: Colors.primary
  }
});

export default CartScreen;
