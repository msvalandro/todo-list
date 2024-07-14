import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  inputContainer: {
    height: 52,
    paddingHorizontal: 24,
    marginTop: -26,

    flexDirection: 'row',
  },
  input: {
    paddingHorizontal: 16,
    marginRight: 4,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,

    fontSize: 16,

    flex: 1,
  },
  addButton: {
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,

    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    marginTop: -26,
  },
  listHeader: {},
})
