import { PlusCircle } from 'phosphor-react-native'
import { useMemo, useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native'

import { Header } from '../../components/Header'
import { ListEmpty } from '../../components/ListEmpty'
import { ListHeader } from '../../components/ListHeader'
import { Task } from '../../components/Task'
import { styles } from './styles'

interface Task {
  id: string
  content: string
  finished: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      content: 'Read Chapter 1 of "Harry Potter and the Sorcerers Stone".',
      finished: false,
    },
    {
      id: '2',
      content: 'Write a summary of the chapter in 100 words.',
      finished: false,
    },
    {
      id: '3',
      content: 'List the main characters introduced in the chapter.',
      finished: false,
    },
    {
      id: '4',
      content: 'Describe the setting of the story in a few sentences.',
      finished: false,
    },
    {
      id: '5',
      content:
        'Draw a picture of Harry Potter based on his description in the book.',
      finished: false,
    },
  ])
  const [newTask, setNewTask] = useState('')

  const concludedTasks = useMemo(() => {
    return tasks.filter((task) => task.finished === true).length
  }, [tasks])

  function handleAddNewTask() {
    if (newTask === '') {
      return
    }

    setTasks((state) => [
      ...state,
      {
        id: new Date().toISOString(),
        content: newTask,
        finished: false,
      },
    ])
    setNewTask('')
  }

  function handleRemoveTask(id: string) {
    setTasks((state) => state.filter((task) => task.id !== id))
  }

  function handleFinishTask(id: string) {
    setTasks((state) =>
      state.map((task) =>
        task.id === id ? { ...task, finished: !task.finished } : { ...task },
      ),
    )
  }

  return (
    <>
      <Header />

      <View style={styles.listContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={newTask}
            onChangeText={setNewTask}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddNewTask}>
            <PlusCircle size={16} color="#f2f2f2" />
          </TouchableOpacity>
        </View>

        <ListHeader created={tasks.length} concluded={concludedTasks} />

        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              content={item.content}
              finished={item.finished}
              onFinish={handleFinishTask}
              onRemove={handleRemoveTask}
            />
          )}
          ListEmptyComponent={ListEmpty}
        />
      </View>
    </>
  )
}
