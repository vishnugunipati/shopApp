import React from 'react';
import  {ScrollView, Text, View, Button, StyleSheet, Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from "../../constants/Colors";
import * as cartAction from '../../store/action/cart'

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector( state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );

  const dispatch = useDispatch();

  return (
  <ScrollView>
    <Image style = {styles.image} source={{uri: selectedProduct.imageUrl}}/>
    <View style={styles.actions}>
      <Button color = { Colors.primary } title='Add To Cart' onPress={() => {
          dispatch(cartAction.addToCart(selectedProduct));
      }}/>
    </View>

    <Text style ={styles.price}>${selectedProduct.price}</Text>
    <Text style={styles.description}>{ selectedProduct.descrption}</Text>
  </ScrollView>


  );
};

ProductDetailScreen.navigationOption = navData => {
  return{
    headerTitle: navData.navigation.getParam('productTitle')
  }
};

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 300
  },
  actions:{
    marginVertical: 10,
    textAlign: 'center'
  },
  price:{
    fontSize: 20,
    color: '#888',
    marginVertical: 20,
    textAlign: 'center'
  },
  description:{
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal:20
  }
});

export default ProductDetailScreen;