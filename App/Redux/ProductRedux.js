import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'immutable'
import {ProductOperation} from '../Database/Operations'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createProduct: null,
  createProductSuccess: ['product'],
  createProductFail: ['error'],
  getProductSuccess: ['products'],
  getProductFail: null,
})

export const LoginTypes = Types
export default Creators

export function createProduct (name, price, description, imageUrl) {
  return dispach => {
    dispach(Creators.createProduct())
    let op = new ProductOperation()
    op.name = name
    op.price = price
    op.description = description
    op.imageUrl = imageUrl
    let response = op.create()
    if (!response) {
      dispach(Creators.createProductFail(op.error.message))
      return
    }
    dispach(Creators.createProductSuccess(response))
  }
}

export function getProducts () {
  return (dispach) => {
    let op = new ProductOperation()
    let response = op.getProducts()
    if (!response) {
      dispach(Creators.getProductFail())
      return
    }

    dispach(Creators.getProductSuccess(response))
  }
}

let AH = {}
AH[Types.CREATE_PRODUCT] = state => state.mergeIn(['createProduct'], {
  creating: true,
})

AH[Types.CREATE_PRODUCT_SUCCESS] = (state, {product}) => state.mergeIn(['createProduct'], {
  creating: false,
  success: true,
})

AH[Types.CREATE_PRODUCT_FAIL] = (state, {error}) => state.mergeIn(['createProduct'], {
  creating: false,
  success: false,
  error: error,
})

AH[Types.GET_PRODUCT_SUCCESS] = (state, {products}) => state.merge({
  products: products,
})

export const INITIAL_STATE = Immutable.fromJS({
  createProduct: {},
  products: [],
})

export const reducer = createReducer(INITIAL_STATE, AH)
