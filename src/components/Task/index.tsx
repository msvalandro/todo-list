import { Trash } from 'phosphor-react-native'
import { Pressable, Text, View } from 'react-native'

import { styles } from './styles'

interface TaskProps {
  id: string
  content: string
  finished: boolean
  onFinish: (id: string) => void
}

export function Task({ id, content, finished, onFinish }: TaskProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.checkbox} onPress={() => onFinish(id)}>
        <Text></Text>
      </Pressable>

      <Text style={styles.content}>{content}</Text>

      <Trash size={16} color="#808080" />
    </View>
  )
}
