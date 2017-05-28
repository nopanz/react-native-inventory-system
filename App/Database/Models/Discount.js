import Realm from 'realm'

class Discount extends Realm.Object {
  static get schema () {
    return {
      name: 'Discount',
      primaryKey: 'id',
      properties: {
        id: 'int',
        discount: 'float',
        quantity: 'int',
      },
    }
  }
}

export default Discount
