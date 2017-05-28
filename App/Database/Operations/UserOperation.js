import Operation from './Operation'

class UserOperation extends Operation {
  constructor (props) {
    super(props)
    this.id = this.newId
    this.firstName = null
    this.lastName = null
    this.email = null
    this.passwordHash = null
  }

  get name () {
    return 'User'
  }

  get params () {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      passwordHash: this.passwordHash,
    }
  }
}

export default UserOperation
