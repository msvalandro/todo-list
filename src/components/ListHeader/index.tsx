import { Text, View } from 'react-native'

import { styles } from './styles'

interface ListHeaderProps {
  created: number
  concluded: number
}

export function ListHeader({ created, concluded }: ListHeaderProps) {
  return (
    <View style={styles.listHeader}>
      <View style={styles.listInfo}>
        <Text style={styles.listLabel}>Criadas</Text>
        <View style={styles.listCounter}>
          <Text style={styles.listCounterText}>{created}</Text>
        </View>
      </View>

      <View style={styles.listInfo}>
        <Text style={[styles.listLabel, styles.listLabelConcluded]}>
          Concluídas
        </Text>
        <View style={styles.listCounter}>
          <Text style={styles.listCounterText}>{concluded}</Text>
        </View>
      </View>
    </View>
  )
}
