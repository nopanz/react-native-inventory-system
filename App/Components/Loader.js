import React from 'react'
import {View, ActivityIndicator} from 'react-native'

const Loader = () => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'black',
      opacity: 0.5,
      zIndex: 99,
    }}>
      <ActivityIndicator
        animating
        style={{alignItems: 'center',
          justifyContent: 'center',
          height: 80,
          transform: [{scale: 3}],
        }}
        size='large'
    />
    </View>
  )
}

export default Loader
