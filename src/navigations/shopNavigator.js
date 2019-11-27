import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import ProductOverview from '../screens/shop/ProductOverview';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    productOverviewScreen: ProductOverview,
    ProductDetail: ProductDetailScreen
}, {
    defaultNavigationOptions: {
      headerStyles: {
        backgroundColor: Platform.OS === 'android' ?  Colors.primary : ''
      },
        headerTintColor: Platform.OS === 'android' ?  Colors.primary : ''
    }
});

export default createAppContainer(ProductsNavigator);


