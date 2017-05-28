import React, { Component, PropTypes } from 'react'
import {Modal, Text, View, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Colors} from '../../../Themes'

import styles from '../Style'

class AddProductModal extends Component {

  render () {
    let {show, onClose} = this.props
    return (
      <Modal
        visible={show}
        onRequestClose={onClose}
        animationType='slide'
      >
        <View style={styles.main}>
          <TouchableOpacity onPress={onClose} style={{
            position: 'absolute',
            paddingTop: 30,
            paddingHorizontal: 10,
            zIndex: 10,
          }}>
            <Icon name='close' size={30} color='white' />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false} styles={styles.container}>
            <Text style={styles.sectionHeader}>Add Product</Text>
            <View style={styles.section}>
              <TextInput placeholder='Product Name'underlineColorAndroid='transparent' style={styles.textInput} placeholderTextColor={Colors.silver} autoCapitalize='words' />
            </View>
          </ScrollView>
        </View>
      </Modal>
    )
  }
}

AddProductModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
}

export default AddProductModal
