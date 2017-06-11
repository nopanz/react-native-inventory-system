import realm from '../Models'

class Operation {
  constructor () {
    this.errors = []
  }

  save () {
    let response
    realm.write(() => {
      response = realm.create(this.modelName, this.params, true)
    })
    return response
  }

  addList (list, params) {
    let response
    realm.write(() => {
      response = list.push(params)
    })
    return response
  }

  get params () {
    return {}
  }

  get required () {
    return {}
  }

  get query () {
    return realm.objects(this.modelName)
  }

  validate () {
    let rules = this.required[this.scenario]
    let error = 0
    rules.forEach(item => {
      if (!this[item]) {
        this.errors.push({message: `${item} is required`})
        error += 1
      }
    })

    if (error > 0) {
      return false
    }
    return true
  }

  get newId () {
    let objects = realm.objects(this.modelName)
    return (objects.length + 1)
  }

  get modelName () {
    return ''
  }

  get error () {
    return this.errors[0]
  }
}

export default Operation
