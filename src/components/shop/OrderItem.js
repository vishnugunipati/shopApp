import React, {useState}from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import CartItem from './CartItems';
import Colors from "../../constants/Colors";

const OrderItem = props => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style = {styles.orderItem}>
      <View style = {styles.summary}>
        <Text style = {styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style = {styles.date}>{props.date}</Text>
      </View>
      <Button color = {Colors.primary} title={showDetails ? 'Hide Details' : 'show Details'} onPress={() =>
        setShowDetails(prevState => !prevState)
      }/>
      {showDetails && <View style={styles.detailItems}>
        {props.items.map(cartItem => <CartItem
          key={cartItem.productId}
          quantity={cartItem.quantity}
          amount ={cartItem.sum}
          title = {cartItem.productTitle}
        />)}
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem:{
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    // height:300,
    margin: 20,
    backgroundColor:'white',
    padding: 10,
    alignItems: 'center'
  },
  summary:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15
  },
  totalAmount:{
    fontSize:20,
  },
  date:{
    fontSize: 15,
    color: '#888'
  },
  detailItems:{
    width:'100%'
  }
});

export default OrderItem;
