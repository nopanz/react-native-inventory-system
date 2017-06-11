import Operation from './Operation'

class ProductOperation extends Operation {
  constructor (props) {
    super(props)
    this.id = this.newId
    this.name = null
    this.price = null
    this.imageUrl = null
    this.description = null
    this.scenario = this.scenarios.CREATE
    this.product_id = null
    this.discount = null
    this.quantity = null
  }

  get modelName () {
    return 'Product'
  }

  get params () {
    return {
      id: this.id,
      name: this.name,
      price: parseFloat(this.price),
      imageUrl: this.imageUrl,
      description: this.description,
    }
  }

  get required () {
    let {CREATE, DISCOUNT} = this.scenarios
    let required = {
      [CREATE]: ['name', 'price'],
      [DISCOUNT]: ['discount', 'quantity'],
    }
    return required
  }

  get scenarios () {
    return {
      CREATE: 'create-product',
      DISCOUNT: 'add-discount',
    }
  }

  create () {
    try {
      let isValid = this.validate
      if (!isValid) {
        return false
      }
      let findDuplicate = this.query.filtered(`name = "${this.name}"`)
      if (findDuplicate.length > 0) {
        this.errors.push({code: 402, message: 'Product Already Exist'})
        return false
      }
      let response = this.save()
      return response
    } catch (err) {
      this.errors.push(err)
      return false
    }
  }

  getProducts () {
    try {
      let products = this.query
      return products
    } catch (err) {
      this.errors.push(err)
      return false
    }
  }

  addDiscount () {
    try {
      let isValid = this.validate()
      if (!isValid) {
        return false
      }

      let product = this.query.find(data => data.id === this.product_id)
      let params = {
        id: product.discounts.length + 1,
        discount: this.discount,
        quantity: this.quantity,
      }
      let response = this.addList(product.discounts, params)
      return response
    } catch (err) {
      this.errors.push(err)
      return false
    }
  }
}

export default ProductOperation
