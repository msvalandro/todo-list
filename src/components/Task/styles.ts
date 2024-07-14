import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 64,
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#333333',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#808080',

    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 8,
    fontSize: 14,
    color: '#F2F2F2',

    flex: 1,
  },
  checkbox: {
    height: 18,
    width: 18,
    marginHorizontal: 3,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#4EA8DE',
  },
})
