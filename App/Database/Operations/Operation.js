import realm from '../Models'

class Operation {

  save () {
    let response
    realm.write(() => {
      response = realm.create(this.name, this.params, true)
    })
    return response
  }

  get params () {
    return {}
  }

  get newId () {
    let objects = realm.objects(this.name)
    return (objects.length + 1)
  }

  get name () {
    return ''
  }
}

export default Operation
