
import React, {Component} from 'react'
import {ScrollView, Text, Image, View} from 'react-native'
import ButtonBox from '../../../Components/ButtonBox'

import { Images } from '../../../Themes'

// Styles
import styles from '../Style'

export default class LaunchScreen extends Component {

  onClick = () => {
    console.log('fire')
  }

  render () {
    console.log(this.props)
    return (
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} styles={styles.container} >
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
          <Text style={styles.sectionText}>
            Marie Collections Inventory System
          </Text>
          <View style={styles.buttonsContainer}>
            <ButtonBox icon='file-download' style={styles.leftUpperBox} text='In Stocks' onPress={this.onClick} />
            <ButtonBox icon='file-upload' style={styles.rigtUpperBox} text='Out Stocks' onPress={this.onClick} />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox icon='local-florist' style={styles.leftBox} text='Products' onPress={e => this.props.navigation.navigate('ProductScreen')} />
            <ButtonBox icon='store-mall-directory' style={styles.rightBox} text='Stores' onPress={this.onClick} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
