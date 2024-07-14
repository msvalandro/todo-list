import { Image, View } from 'react-native'

import logoImg from '../../assets/logo.png'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={logoImg}
        alt='Imagem de um foguete decolando com a palavra "todo" ao lado'
        style={styles.logo}
      />
    </View>
  )
}
