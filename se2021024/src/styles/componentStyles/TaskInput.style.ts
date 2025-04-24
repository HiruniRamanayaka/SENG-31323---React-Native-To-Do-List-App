import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    inputContainer: {
      flex: 1,
      marginRight: 8,
    },
    input: {
      fontSize: 14,
      backgroundColor: '#1F1E1B',
      borderColor: '#FF8303',
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      marginBottom: 8,
      color: '#F0E3CA', 
      height: 36,
      paddingVertical: 10,   // adds vertical padding for both placeholder & text
      paddingHorizontal: 12,
    },
    taskItem: {
      backgroundColor: '#333',
      padding: 12,
      marginBottom: 8,
      borderRadius: 8,
    },
    taskTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
    },
    taskAbout: {
      fontSize: 14,
      color: '#aaa',
    },
  });

export default styles;  