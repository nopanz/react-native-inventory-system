import { StyleSheet } from 'react-native'
import {Metrics, ApplicationStyles, Colors} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginBottom: 36,
    paddingTop: Metrics.section,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  leftUpperBox: {
    borderColor: Colors.secondaryLight,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  leftBox: {
    borderColor: Colors.secondaryLight,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  rigtUpperBox: {
    borderColor: Colors.secondaryLight,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  rightBox: {
    borderColor: Colors.secondaryLight,
    borderBottomWidth: 1,
  },
})
