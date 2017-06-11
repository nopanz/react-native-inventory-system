import React, { Component, PropTypes } from 'react'
import {TextInput} from 'react-native'
import { Colors } from '../Themes'

import styles from './Styles/TextInput'

class CustomTextInput extends Component {
  render () {
    let {placeholder, type, onChange, name} = this.props
    return (
      <TextInput placeholder={placeholder}
        underlineColorAndroid='transparent'
        style={styles.textInput}
        placeholderTextColor={Colors.silver}
        autoCapitalize='words'
        keyboardType={type || 'default'}
        name={name}
        onChangeText={(text) => onChange({value: text, name: name})} />
    )
  }
}

CustomTextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
}

export default CustomTextInput
