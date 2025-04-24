import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

import {COLORS} from '../constants/Theme';
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
        <TextInput
          style={styles.input}
          placeholder="Title..."
          placeholderTextColor="#888"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="About..."
          placeholderTextColor="#888"
          value={about}
          onChangeText={setAbout}
        />
      </View>
      <AddTaskButton title={title} about={about} onSuccess={resetFields} />
    </View>
  );
};

export default TaskInput;
