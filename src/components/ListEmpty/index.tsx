import { ClipboardText } from 'phosphor-react-native'
import { Text, View } from 'react-native'

import { styles } from './styles'

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <ClipboardText size={56} color="#333333" />

      <Text style={[styles.text, styles.textBold]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
