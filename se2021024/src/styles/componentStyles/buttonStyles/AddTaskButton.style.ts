import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/Theme';

const styles = StyleSheet.create({
    customButton: {
      backgroundColor: COLORS.background,
      borderColor: '#FF8303',
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      marginBottom: 8,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      width: 80,
    },
    buttonText: {
      fontSize: 36,
      color: '#FF8303',
    },
  });
  
export default styles;