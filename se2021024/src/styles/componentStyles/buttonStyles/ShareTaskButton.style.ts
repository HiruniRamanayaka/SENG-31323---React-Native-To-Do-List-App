import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/Theme';

const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.8)',
      justifyContent: 'flex-end',
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#1F1E1B',
      margin: 20,
      padding: 10,
      borderTopWidth: 1,
      borderTopColor: '#333',
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    },
    logoButtons: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginHorizontal: 5,
      backgroundColor: '#2C2B29',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
  });

export default styles;