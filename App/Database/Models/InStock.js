import Realm from 'realm'

class InStock extends Realm.Object {
  static get schema () {
    return {
      name: 'InStock',
      primaryKey: 'id',
      properties: {
        id: 'int',
        product: 'Product',
        quantity: 'int',
      },
    }
  }
}

export default InStock
