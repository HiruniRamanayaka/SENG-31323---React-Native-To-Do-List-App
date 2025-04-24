import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {COLORS} from '../../constants/Theme';
import {useTaskStore} from '../../stores/useTaskStore';
import {AddTaskButtonProps} from '../../types/TaskTypes';
import styles from '../../styles/componentStyles/buttonStyles/AddTaskButton.style'

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
