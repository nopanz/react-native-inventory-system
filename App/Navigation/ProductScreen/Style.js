import { StyleSheet } from 'react-native'
import {Metrics, ApplicationStyles, Colors, Fonts} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  icon: {
    fontSize: 20,
    color: Colors.snow,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.secondaryLight,
  },
  sectionHeader: {
    ...Fonts.style.h1,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.snow,
    marginVertical: Metrics.smallMargin,
    textAlign: 'center',
  },
  textInput: {
    ...Fonts.style.h5,
    backgroundColor: Colors.frost,
    color: Colors.charcoal,
    paddingVertical: 15,
    paddingLeft: Metrics.doubleBaseMargin,
  },
})
