import { Check, Trash } from 'phosphor-react-native'
import { useMemo } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

interface TaskProps {
  id: string
  content: string
  finished: boolean
  onFinish: (id: string) => void
  onRemove: (id: string) => void
}

export function Task({ id, content, finished, onFinish, onRemove }: TaskProps) {
  const checkboxStyle = useMemo(() => {
    return finished
      ? [styles.checkbox, styles.checkboxFinished]
      : styles.checkbox
  }, [finished])

  const contentStyle = useMemo(() => {
    return finished ? [styles.content, styles.contentFinished] : styles.content
  }, [finished])

  return (
    <View style={styles.container}>
      <Pressable style={checkboxStyle} onPress={() => onFinish(id)}>
        {finished && <Check size={12} color="#F2F2F2" />}
      </Pressable>

      <Text style={contentStyle}>{content}</Text>

      <TouchableOpacity onPress={() => onRemove(id)}>
        <Trash size={16} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
