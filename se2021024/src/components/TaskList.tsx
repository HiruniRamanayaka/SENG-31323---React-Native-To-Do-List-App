import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTaskStore } from '../stores/useTaskStore';
import { COLORS } from '../constants/theme';

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <ScrollView style={styles.listContainer}> 
      {tasks.length === 0 ? (
        <Text style={styles.emptyText}>No tasks</Text>
        ) : (
          tasks.map((task, index) => (
            <View key={index} style={styles.taskItem}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <Text style={styles.taskAbout}>{task.about}</Text>
            </View>
          ))
      )}
    </ScrollView>
  );
};

export default TaskList

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  taskItem: {
    backgroundColor: '#333',
    padding: 12,
    marginBottom: 12,
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
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});