import React, {Component, PropTypes} from 'react'
import {View, Text} from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AddProductModal from './AddProductModal'

import styles from '../Style'

export default class ProductScreen extends Component {
  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  handleClose = () => {
    this.setState({show: false})
  }

  handleOpen = () => {
    this.setState({show: true})
  }

  render () {
    let {show} = this.state

    const productModal = (
      <AddProductModal
        show={show}
        onClose={this.handleClose}
      />
    )
    return (
      <View style={styles.container}>
        <Text>Hello Product</Text>
        <ActionButton
          buttonColor='#009688'
          onPress={this.handleOpen}
        >
          <Icon name='add' size={30} color='white' />
        </ActionButton>
        {show && productModal}
      </View>
    )
  }
}
