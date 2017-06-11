import Realm from 'realm'

class Product extends Realm.Object {
  static get schema () {
    return {
      name: 'Product',
      primaryKey: 'id',
      properties: {
        id: 'int',
        name: 'string',
        price: 'float',
        imageUrl: 'string',
        description: 'string',
        discounts: {type: 'list', objectType: 'Discount'},
      },
    }
  }
}

export default Product
