import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
    listContainer: {
      marginTop: 16,
    },
    taskItem: {
      flexDirection: 'row',
      backgroundColor: '#1F1E1B',
      padding: 10,
      marginBottom: 12,
      borderColor: '#A35709',
      borderWidth: 2,
      borderRadius: 6,
      textAlign: 'center',
    },
    taskItemContainer: {
      flex: 1,
      marginRight: 8,
    },
    taskTitle: {
      fontSize: 22,
      fontWeight: 500,
      color: '#F0E3CA',
    },
    taskAbout: {
      fontSize: 14,
      fontWeight: 400,
      color: '#F0E3CA',
    },
    deleteButton: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      marginBottom: 8,
    },
    borderText: {
      marginTop: 30,
      alignItems: 'center',
    },
    topBorder: {
      borderColor: '#FF8303',
      borderBottomWidth: 3,
      width: 64,
    },
    bottomBorder: {
      borderColor: '#FF8303',
      borderTopWidth: 3,
      width: 64,
    },
    emptyText: {
      textAlign: 'center',
      fontSize: 24,
      color: 'white',
      padding: 10,
    },
    buttonsRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 15,
    },
    iconButton: {
      backgroundColor: '#1F1E1B',
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderColor: '#A35709',
      borderWidth: 1,
      borderRadius: 6,
      marginLeft: 6,
    },
  });

  export default styles;