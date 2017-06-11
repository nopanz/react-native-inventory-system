import React, {Component, PropTypes} from 'react'
import {View, Text} from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AddProductModal from './AddProductModal'
import ProductList from './ProductList'

import styles from '../Style'

export default class ProductScreen extends Component {
  static propTypes = {
    product: PropTypes.object,
    createProduct: PropTypes.func,
    getProducts: PropTypes.func,
  }

  constructor (props) {
    super(props)
    this.state = {
      show: false,
      product: null,
    }
  }
  handleClose = () => {
    this.setState({show: false})
  }

  handleOpen = () => {
    this.setState({show: true})
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.product.get('createProduct').get('success')) {
      this.setState({show: false})
    }
  }

  componentDidMount () {
    this.props.getProducts()
  }

  showUpdateModal = (product) => {
    this.setState({show: true, product: product})
  }

  render () {
    let {show} = this.state
    let { product } = this.props

    const productModal = (
      <AddProductModal
        show={show}
        onClose={this.handleClose}
        createProduct={this.props.createProduct}
        creatingProduct={this.props.product.get('createProduct')}
        product={this.state.product}
      />
    )
    return (
      <View style={styles.container}>
        {product.get('products').size > 0 || <ProductList data={product.get('products')} showUpdateModal={this.showUpdateModal} />}
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
