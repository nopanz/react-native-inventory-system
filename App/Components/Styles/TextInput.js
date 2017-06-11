import { StyleSheet } from 'react-native'
import {Metrics, Colors, Fonts} from '../../Themes'

export default StyleSheet.create({
  textInput: {
    ...Fonts.style.h5,
    backgroundColor: Colors.frost,
    color: Colors.charcoal,
    paddingVertical: 15,
    paddingLeft: Metrics.doubleBaseMargin,
  },
})
