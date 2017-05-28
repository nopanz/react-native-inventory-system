import Realm from 'realm'
import User from './User'
import Product from './Product'
import Discount from './Discount'
import InStock from './InStock'

export default new Realm({schema: [User, Product, Discount, InStock], schemaVersion: 1})
