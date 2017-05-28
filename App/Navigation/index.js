import { StackNavigator } from 'react-navigation'
import LaunchScreen from './LaunchScreen'
import ProductScreen from './ProductScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen,
  ProductScreen,
}, {
  headerMode: 'screen',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title,
    headerTintColor: 'white',
  },
})

export default PrimaryNav
