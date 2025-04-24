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
      alignItems: 'center',
      margin: 10,
    },
    modalContainer: {
      backgroundColor: COLORS.darkGray,
      padding: 20,
      width: 360,
      height: 450,
    },
    input: {
      borderColor: COLORS.secondary,
      borderWidth: 1,
      backgroundColor: COLORS.darkGray,
      color: COLORS.white,
      borderRadius: 6,
      marginBottom: 10,
      padding: 8,
    },
    inputAbout: {
      borderColor: COLORS.secondary,
      borderWidth: 1,
      backgroundColor: COLORS.darkGray,
      color: COLORS.white,
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
      backgroundColor: COLORS.darkGray,
      borderColor: COLORS.secondary,
      borderWidth: 1,
      borderRadius: 4,
      padding: 4,
      alignItems: 'center',
      marginBottom: 8,
      height: 24,
      width: 64,
    },
    buttonText: {
      color: COLORS.white,
      fontSize: 12,
    },
  });
  

export default styles;