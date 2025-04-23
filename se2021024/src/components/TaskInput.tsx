import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {COLORS} from '../constants/Theme';
import {useTaskStore} from '../stores/useTaskStore';
import AddTaskButton from './buttons/AddTaskButton';

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
    fontSize: 16,
    backgroundColor: '#242320',
    borderColor: '#FF8303',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
    color: '#F0E3CAA3',
  },
  taskItem: {
    backgroundColor: '#333',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  taskAbout: {
    fontSize: 14,
    color: '#aaa',
  },
});
