import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
    listContainer: {
      marginTop: 16,
    },
    borderText: {
        marginTop: 30,
        alignItems: 'center',
    },
    topBorder: {
        borderColor: COLORS.primary,
        borderBottomWidth: 3,
        width: 64,
    },
    bottomBorder: {
        borderColor: COLORS.primary,
        borderTopWidth: 3,
        width: 64,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 24,
        color: COLORS.white,
        padding: 10,
    },
    taskItem: {
      flexDirection: 'row',
      backgroundColor: COLORS.darkGray,
      padding: 10,
      marginBottom: 12,
      borderColor: COLORS.secondary,
      borderWidth: 2,
      borderRadius: 6,
      textAlign: 'center',
    },
    taskItemContainer: {
      flex: 1,
      marginRight: 8,
    },
    taskTitle: {
      fontSize: 22,
      fontWeight: 500,
      color: COLORS.white,
    },
    taskAbout: {
      fontSize: 14,
      fontWeight: 400,
      color: COLORS.white,
    },
    deleteButton: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      marginBottom: 8,
    },
    buttonsRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 15,
    },
  });

  export default styles;