import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  listHeader: {
    marginTop: 28,
    marginBottom: 48,
    paddingBottom: 20,
    borderBottomColor: '#808080',
    borderBottomWidth: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listInfo: {
    flexDirection: 'row',
  },
  listLabel: {
    marginRight: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE',
  },
  listLabelConcluded: {
    color: '#8284FA',
  },
  listCounter: {
    width: 25,
    backgroundColor: '#333333',
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listCounterText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
})
