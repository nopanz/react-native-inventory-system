import React, {PropTypes, Component} from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './Styles/ButtonBox'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class ButtonBox extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    text: PropTypes.string,
  }

  render () {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
        <Icon name={`${this.props.icon}`} size={60} color='#ffffff' />
        <Text style={styles.label}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
