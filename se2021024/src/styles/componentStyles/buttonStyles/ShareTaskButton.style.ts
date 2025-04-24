import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/Theme';

const styles = StyleSheet.create({
    iconButton: {
      backgroundColor: COLORS.darkGray,
      padding: 10,
      borderColor: COLORS.secondary,
      borderWidth: 1,
      borderRadius: 6,
      marginLeft: 6,
      width: 36,
      height: 36,
    },
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.8)',
      justifyContent: 'flex-end',
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: COLORS.darkGray,
      margin: 20,
      padding: 10,
      borderTopWidth: 1,
      borderTopColor: COLORS.darkGray,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    },
    logoButtons: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginHorizontal: 5,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles;