import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/Theme';

const styles = StyleSheet.create({
    button: {
      marginTop: 8,
      alignSelf: 'flex-end',
      backgroundColor: COLORS.black,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 5,
      borderColor: COLORS.secondary,
      borderWidth: 2,
      height: 36,
      width: 36,
    },
    deleteButtonText: {
      fontSize: 16,
      textAlign: 'center',
      color: COLORS.primary,
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
      backgroundColor: COLORS.darkGray,
      padding: 20,
      alignItems: 'center',
      borderColor: COLORS.secondary,
      borderTopWidth: 2,
      borderRadius: 4,
      marginBottom: 8,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 400,
      alignItems: 'center',
      margin: 40,
      color: COLORS.white,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: '10',
      width: '60%',
    },
    deleteButton: {
      backgroundColor: COLORS.darkGray,
      padding: 4,
      flex: 1,
      alignItems: 'center',
      borderColor: COLORS.secondary,
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 8,
      height: 24,
      width: 64,
    },
    cancelButton: {
      backgroundColor: COLORS.darkGray,
      padding: 4,
      flex: 1,
      alignItems: 'center',
      borderColor: COLORS.secondary,
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 8,
      height: 24,
      width: 64,
    },
    buttonText: {
      fontSize: 12,
      textAlign: 'center',
      color: COLORS.secondary,
    },
  });
  

export default styles;