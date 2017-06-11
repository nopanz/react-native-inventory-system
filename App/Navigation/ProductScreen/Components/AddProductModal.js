import React, { Component, PropTypes } from 'react'
import {Modal, Text, View, ScrollView, TouchableOpacity, Image, Button, ToastAndroid} from 'react-native'
import {Images} from '../../../Themes'
import {TextInput, Loader} from '../../../Components'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-picker'

import styles from '../Style'

class AddProductModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      options: {
        title: 'Select Avatar',
        customButtons: [
       {name: 'fb', title: 'Choose Photo from Facebook'},
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      image: '',
      name: '',
      price: '',
      description: '',
    }
  }

  showImagePicker = () => {
    ImagePicker.showImagePicker(this.state.options, response => {
      let source = {uri: `data:image/jpeg;base64,${response.data}`}
      if (!response.didCancel) {
        this.setState({image: source})
      }
    })
  }

  handleOnChange = (e) => {
    this.setState({[e.name]: e.value})
  }

  handleCreate = () => {
    let {name, price, description, image} = this.state
    this.props.createProduct(name, price, description, image.uri || '')
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.creatingProduct.get('error')) {
      ToastAndroid.showWithGravity(
                nextProps.creatingProduct.get('error'),
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
              )
    }
  }

  render () {
    let {show, onClose, creatingProduct} = this.props
    let {name, price} = this.state
    let loader = (<Loader />)
    return (
      <Modal
        visible={show}
        onRequestClose={onClose}
        animationType='slide'
      >
        <View style={styles.main}>
          {creatingProduct.get('creating') && loader}
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
            <View style={styles.imageContainer}>
              <View style={styles.imageHolder}>
                <TouchableOpacity onPress={this.showImagePicker}>
                  <Image source={this.state.image || Images.defaultLogo}
                    style={styles.image}
                />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputSection}>
              <TextInput placeholder='Name' name='name' onChange={this.handleOnChange} />
            </View>
            <View style={styles.inputSection}>
              <TextInput placeholder='Price' name='price' type='numeric' onChange={this.handleOnChange} />
            </View>
            <View style={styles.inputSection}>
              <TextInput placeholder='Description' name='description' onChange={this.handleOnChange} />
            </View>
            <View style={styles.inputSection}>
              <Button title='Save' onPress={this.handleCreate} disabled={!name || !price} />
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
  createProduct: PropTypes.func,
  creatingProduct: PropTypes.object,
}

export default AddProductModal
