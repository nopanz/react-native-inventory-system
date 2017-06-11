import React, { Component, PropTypes } from 'react'
import {View, TouchableNativeFeedback} from 'react-native'

import styles from './Styles/ListViewStyles'

class ListViewRow extends Component {
  render () {
    let {style, onPress} = this.props
    let rowSyle = [styles.row]

    if (style) {
      rowSyle.push(style)
    }

    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={rowSyle}>
          {this.props.children}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

ListViewRow.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node,
}

export default ListViewRow
