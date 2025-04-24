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
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      backgroundColor: COLORS.darkGray,
      padding: 30,
      borderRadius: 4,
      width: 300,
      borderColor: COLORS.secondary,
      borderTopWidth: 2,
      marginBottom: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: COLORS.white,
      marginBottom: 12,
      textAlign: 'center',
    },
    content: {
      fontSize: 14,
      color: COLORS.white,
      marginBottom: 6,
    },
    closeButton: {
      marginTop: 16,
      borderColor: COLORS.secondary,
      backgroundColor: COLORS.darkGray,
      borderWidth: 1,
      padding: 4,
      borderRadius: 4,
      alignItems: 'center',
      alignSelf: 'center',
      height: 24,
      width: 64,
    },
    closeText: {
      color: COLORS.white,
      fontSize: 12,
    },
  });
  

export default styles;