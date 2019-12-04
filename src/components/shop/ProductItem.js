import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from '../UI/Card';

const ProductItem = props =>{
  let TouchableCmp = TouchableOpacity;

  if(Platform.OS === 'android' && Platform.version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return(

      <Card style = {styles.product}>
        <View style = {styles.touchable}>
          <TouchableCmp onPress = {props.onSelect} useForeground>
            <View style = {styles.imageContainer}>
              <Image source={{uri: props.image}} style = {styles.images} />
            </View>
            <View style={styles.titleText}>
              <Text style = {styles.dec}>{props.title}</Text>
              <Text style={styles.prices}>${props.price}</Text>
            </View>
            <View style = {styles.actions}>
              {props.children}
            </View>
          </TouchableCmp>
        </View>
      </Card>

  );
};

const styles = StyleSheet.create({
  product: {
    height:300,
    margin: 7
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
