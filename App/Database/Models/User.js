import Realm from 'realm'

class User extends Realm.Object {
  static get schema () {
    return {
      name: 'User',
      primaryKey: 'id',
      properties: {
        id: 'int',
        firstName: 'string',
        lastName: 'string',
        passwordHash: 'string',
        email: 'string',
      },
    }
  }
}

export default User
