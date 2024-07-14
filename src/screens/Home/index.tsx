import { PlusCircle } from 'phosphor-react-native'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Header } from '../../components/Header'
import { styles } from './styles'

export function Home() {
  return (
    <>
      <Header />

      <View style={styles.listContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />

          <TouchableOpacity style={styles.addButton}>
            <PlusCircle size={16} color="#f2f2f2" />
          </TouchableOpacity>
        </View>

        <View style={styles.listHeader}>
          <Text>Criadas</Text>
          <Text>Concluídas</Text>
        </View>
      </View>
    </>
  )
}
