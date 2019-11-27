import React from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Color from '../../constants/Colors'

const ProductItem = props =>{
  let TouchableCmp = TouchableOpacity;

  if(Platform.OS === 'android' && Platform.version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return(

      <View style = {styles.product}>
        <View style = {styles.touchable}>
          <TouchableCmp onPress = {props.onViewDetail} useForeground>
            <View style = {styles.imageContainer}>
              <Image source={{uri: props.image}} style = {styles.images} />
            </View>
            <View style={styles.titleText}>
              <Text style = {styles.dec}>{props.title}</Text>
              <Text style={styles.prices}>${props.price}</Text>
            </View>
            <View style = {styles.actions}>
              <Button color = {Color.primary} title= 'View details' onPress={props.onViewDetail}/>
              <Button color = {Color.primary} title= 'To cart' onPress={props.onAddToCart}/>
            </View>
          </TouchableCmp>
        </View>
      </View>

  );
};

const styles = StyleSheet.create({
  product: {
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    height:300,
    margin: 7,
    backgroundColor:'white',
  },
  touchable:{
    borderRadius: 10,
    overflow: 'hidden'
  },
  images:{
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    overflow: 'hidden'
  },
  dec: {
    fontSize: 18,
    marginVertical: 4,
  },
  prices: {
    fontSize:14,
    color: '#888'
  },
  actions: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
    color: 'white'

  },
  titleText:{
    alignItems: 'center',
    height: '15%',
    padding: 10
  }
});

export default ProductItem;