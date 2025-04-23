import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {COLORS} from '../../constants/Theme';
import {useTaskStore} from '../../stores/useTaskStore';

type AddTaskButtonProps = {
  title: string;
  about: string;
  onSuccess: () => void;
};

const AddTaskButton: React.FC<AddTaskButtonProps> = ({
  title,
  about,
  onSuccess,
}) => {
  const addTask = useTaskStore(state => state.addTask);

  const handleSave = () => {
    if (!title || !about) {
      Alert.alert('Validation', 'Please fill out both fields.');
      return;
    }

    addTask({title, about});
    //Alert.alert('Success', 'Task saved!');
    onSuccess(); // callback to reset the form
  };

  return (
    <TouchableOpacity style={styles.customButton} onPress={handleSave}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

export default AddTaskButton;

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
    height: 96,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8303',
  },
});
