import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.smallMargin,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: Colors.charcoal,
    borderWidth: 1,
    borderRadius: 5,
  },
})
