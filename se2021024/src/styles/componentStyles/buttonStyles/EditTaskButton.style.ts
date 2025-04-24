import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/Theme';

const styles = StyleSheet.create({
    iconButton: {
      backgroundColor: '#1F1E1B',
      padding: 10,
      borderColor: '#A35709',
      borderWidth: 1,
      borderRadius: 6,
      marginLeft: 6,
      width: 36,
      height: 36,
    },
    iconText: {
      color: 'white',
      fontSize: 16,
    },
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.8)',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: 10,
    },
    modalContainer: {
      backgroundColor: '#333',
      padding: 20,
      width: 360,
      height: 450,
    },
    input: {
      borderColor: '#A35709',
      borderWidth: 1,
      backgroundColor: '#1F1E1B',
      color: 'white',
      borderRadius: 6,
      marginBottom: 10,
      padding: 8,
    },
    inputAbout: {
      borderColor: '#A35709',
      borderWidth: 1,
      backgroundColor: '#1F1E1B',
      color: 'white',
      borderRadius: 6,
      marginBottom: 10,
      padding: 8,
      height: 320,
      textAlignVertical: 'top',
      textAlign: 'left',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10',
    },
    buttons: {
      backgroundColor: '#1F1E1B',
      borderColor: '#A35709',
      borderWidth: 1,
      borderRadius: 4,
      padding: 4,
      alignItems: 'center',
      marginBottom: 8,
      height: 24,
      width: 64,
    },
    buttonText: {
      color: 'white',
      fontSize: 12,
    },
  });
  

export default styles;