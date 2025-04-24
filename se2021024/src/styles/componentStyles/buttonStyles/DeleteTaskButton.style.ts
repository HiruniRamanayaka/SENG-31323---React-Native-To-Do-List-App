import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/Theme';

const styles = StyleSheet.create({
    button: {
      marginTop: 8,
      alignSelf: 'flex-end',
      backgroundColor: '#000',
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 5,
      borderColor: '#A35709',
      borderWidth: 2,
      height: 36,
      width: 36,
    },
    buttonText: {
      fontSize: 12,
      textAlign: 'center',
      color: '#A35709',
    },
    deleteButtonText: {
      fontSize: 16,
      textAlign: 'center',
      color: '#FF8303',
    },
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.8)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: 300,
      height: 200,
      backgroundColor: '#1F1E1B',
      padding: 20,
      alignItems: 'center',
      borderColor: '#A35709',
      borderTopWidth: 2,
      borderRadius: 4,
      marginBottom: 8,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 400,
      alignItems: 'center',
      margin: 40,
      color: 'white',
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: '10',
      width: '60%',
    },
    deleteButton: {
      backgroundColor: '#1F1B1E',
      padding: 4,
      flex: 1,
      alignItems: 'center',
      borderColor: '#A35709',
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 8,
      height: 24,
      width: 64,
    },
    cancelButton: {
      backgroundColor: '#1F1B1E',
      padding: 4,
      flex: 1,
      alignItems: 'center',
      borderColor: '#A35709',
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 8,
      height: 24,
      width: 64,
    },
  });
  

export default styles;