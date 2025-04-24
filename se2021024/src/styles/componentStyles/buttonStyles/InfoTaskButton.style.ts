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
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      backgroundColor: '#1F1E1B',
      padding: 30,
      borderRadius: 4,
      width: 300,
      borderColor: '#A35709',
      borderTopWidth: 2,
      marginBottom: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#F0E3CA',
      marginBottom: 12,
      textAlign: 'center',
    },
    content: {
      fontSize: 14,
      color: '#F0E3CA',
      marginBottom: 6,
    },
    closeButton: {
      marginTop: 16,
      borderColor: '#A35709',
      backgroundColor: '#1F1B1E',
      borderWidth: 1,
      padding: 4,
      borderRadius: 4,
      alignItems: 'center',
      alignSelf: 'center',
      height: 24,
      width: 64,
    },
    closeText: {
      color: 'white',
      fontSize: 12,
    },
  });
  

export default styles;