import React from 'react';
import {Tetx, View, StyleSheet} from 'react-native';

const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
card: {
  borderRadius: 10,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.26,
  shadowRadius: 8,
  elevation: 5,
  backgroundColor:'white',
}
});

export default Card;
