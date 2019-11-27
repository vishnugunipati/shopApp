import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
// import * as cartActions from '../../store/action/cart';

const ProductOverview = props => {
    const products = useSelector(state => state.products.availableProducts);
    // const dispatch  = useDispatch();
    return (
      <FlatList data = {products}
                keyExtractor = {item => item.id}
                renderItem = {itemData => (
                  <ProductItem
                  image={itemData.item.imageUrl}
                  title={itemData.item.title}
                  price={itemData.item.price}
                  onViewDetail={() => {
                    props.navigation.navigate('ProductDetail',{
                      productId: itemData.item.id,
                      productTitle: itemData.item.titel
                    });
                  }}
                  onAddToCart={() => {
                    // dispatch(cartActions.addTocart(itemData.item))
                  }}
                />)}
      />
    );
};

ProductOverview.navigationOptions = {
    headerTitle: 'All products'
};

export default ProductOverview;
