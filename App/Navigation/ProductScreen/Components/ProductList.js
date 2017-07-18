import React, {PropTypes} from 'react'
import {View, Text, ListView} from 'react-native'
import currencyFormatter from 'currency-formatter'
import {Images} from '../../../Themes'
import {ListViewRow, AvatarImageHolder} from '../../../Components'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from '../Style'

class ProductList extends React.Component {

  static propTypes = {
    showUpdateModal: PropTypes.func,
  }

  constructor (props) {
    super(props)
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows([]),
    }
  }

  renderRow (product) {
    let {name, price, description, imageUrl} = product
    let image
    if (imageUrl) {
      image = {uri: imageUrl}
    }
    return (
      <ListViewRow onPress={() => this.props.showUpdateModal(product)} >
        <AvatarImageHolder size={99} source={image || Images.defaultLogo} />
        <View style={{padding: 10}}>
          <Text style={styles.label} >{name}</Text>
          <Text >{currencyFormatter.format(price, {locale: 'en-PH'})}</Text>
          <Text >{description}</Text>
        </View>
      </ListViewRow>
    )
  }

  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  renderFooter = () => {
    return (
      <Text> - Footer - </Text>
    )
  }

  componentWillReceiveProps (nextProps) {
    let {data} = nextProps
    if (data) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
      })
    }
  }

  render () {
    console.log('update modal', this.props.showUpdateModal)
    return (
      <View style={styles.listContainer}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
          pageSize={15}
        />
      </View>
    )
  }
}

export default ProductList
