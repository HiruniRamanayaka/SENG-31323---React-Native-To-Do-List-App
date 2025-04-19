import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TextInput, Button, Text, TouchableOpacity, Alert } from 'react-native'
import { COLORS } from '../constants/Theme';
import { useTaskStore } from '../stores/useTaskStore';

const TaskInput = () => {
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');

    const addTask = useTaskStore((state) => state.addTask);

    const handleSave = () => {
        if (!title || !about) {
        Alert.alert('Validation', 'Please fill out both fields.');
        return;
        }

        addTask({ title, about });
        setTitle('');
        setAbout('');
        Alert.alert('Success', 'Task saved!');
    };

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="Title..."
                placeholderTextColor="#fff"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput 
                style={styles.input}
                placeholder="About..."
                placeholderTextColor="#fff"
                value={about}
                onChangeText={setAbout}
            />
        </View>
        <TouchableOpacity style={styles.customButton} onPress={handleSave}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default TaskInput

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
        backgroundColor: '#1F1B1E',
        borderBottomColor: '#A35709',
        borderColor: '#FFA500', 
        borderWidth: 1,         
        borderRadius: 6,        
        padding: 10,           
        marginBottom: 8,
        color: '#fff',
    },
    customButton: {
        backgroundColor: COLORS.background,
        borderBottomColor: '#A35709',
        borderColor: '#FFA500', 
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
        color: '#FFA500',
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
