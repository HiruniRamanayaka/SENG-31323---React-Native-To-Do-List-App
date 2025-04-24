import React, {useState} from 'react';
import {
  View,
  TextInput,
} from 'react-native';

import AddTaskButton from './buttons/AddTaskButton';
import styles from '../styles/componentStyles/TaskInput.style'

const TaskInput = () => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');

  const resetFields = () => {
    setTitle('');
    setAbout('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* Title input */}
        <TextInput
          style={styles.input}
          placeholder="Title..."
          placeholderTextColor="#F0E3CAA3"
          value={title}
          onChangeText={setTitle}
        />
        {/* About input */}
        <TextInput
          style={styles.input}
          placeholder="About..."
          placeholderTextColor="#F0E3CAA3"
          value={about}
          onChangeText={setAbout}
        />
      </View>
      {/* Add button */}
      <AddTaskButton title={title} about={about} onSuccess={resetFields} />
    </View>
  );
};

export default TaskInput;
