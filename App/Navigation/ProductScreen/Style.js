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
  imageHolder: {
    width: 210,
    height: 210,
    borderRadius: 210,
    borderWidth: 4,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 199,
    height: 199,
    borderRadius: 200,
  },
  listContainer: {
    flex: 1,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },
  label: {
    ...Fonts.style.h5,
  },
  listContent: {
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
  },
})
