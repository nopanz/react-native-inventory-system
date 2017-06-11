import React, { PropTypes } from 'react'
import {View, Image} from 'react-native'

const AvatarImageHolder = props => {
  let {size, source} = props

  return (
    <View style={{ width: size + 10,
      height: size + 10,
      borderRadius: size + 10,
      borderWidth: 4,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center' }}>
      <Image source={source}
        style={{
          width: size,
          height: size,
          borderRadius: size,
        }}
      />
    </View>
  )
}

AvatarImageHolder.propTypes = {
  size: PropTypes.number,
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
}

export default AvatarImageHolder
