import ProductScreen from '../Components/ProductScreen'
import {createProduct, getProducts} from '../../../Redux/ProductRedux'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    product: state.product,
  }
}

const mapActionToProps = {
  createProduct,
  getProducts,
}

export default connect(mapStateToProps, mapActionToProps)(ProductScreen)
