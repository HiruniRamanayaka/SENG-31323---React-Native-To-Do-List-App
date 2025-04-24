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
      backgroundColor: COLORS.darkGray,
      borderColor: COLORS.primary,
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      marginBottom: 8,
      color: COLORS.white, 
      height: 36,
      paddingVertical: 10,   // adds vertical padding for both placeholder & text
      paddingHorizontal: 12,
    },
  });

export default styles;  