import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTaskStore } from '../stores/useTaskStore';
import { COLORS } from '../constants/theme';
import DeleteTaskButton from './DeleteTaskButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InfoTaskButton from './InfoTaskButton';
import EditTaskButton from './EditTaskButton';

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const [selectedTaskIndex, setSelectedTaskIndex] = React.useState<number | null>(null);

  return (
    <ScrollView style={styles.listContainer}> 
      {tasks.length === 0 ? (
        <View style={styles.borderText}>
            <Text style={styles.topBorder}></Text>
            <Text style={styles.emptyText}>No tasks</Text>
            <Text style={styles.bottomBorder}></Text>
        </View>
        ) : (
          tasks.map((task, index) => (
            <View key={index}>
              <View  style={styles.taskItem}>
                <View style={styles.taskItemContainer}>
                  <TouchableOpacity onPress={() => setSelectedTaskIndex(index === selectedTaskIndex ? null : index)}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    <Text style={styles.taskAbout}>{task.about}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.deleteButton}>
                  <DeleteTaskButton index={index} />
                </View>
              </View>

              {/* share, info, edit buttons*/}
              <View>
                {selectedTaskIndex === index && (
                <View style={styles.buttonsRow}>
                  <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="share-social-outline" size={20} color="#fff" />
                  </TouchableOpacity>
                  <View>
                    <InfoTaskButton index={index}/>
                  </View>
                  <View>
                    <EditTaskButton index={index}/>
                  </View>
                </View>
                )}
              </View>
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
  },
  taskItem: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 12,
    marginBottom: 12,
    borderColor: '#A35709', 
    borderWidth: 2,         
    borderRadius: 6,        
    textAlign: 'center',
  },
  taskItemContainer: {
    flex: 1,
    marginRight: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F0E3CA',
  },
  taskAbout: {
    fontSize: 14,
    color: '#F0E3CA',
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,           
    marginBottom: 8,
  },
  borderText: {
    marginTop: 30,
    alignItems: 'center',
  },
  topBorder: {
    borderBottomColor: '#A35709',
    borderColor: '#FFA500', 
    borderTopWidth: 2,
    width: 40,      
  },
  bottomBorder: {
    borderBottomColor: '#A35709',
    borderColor: '#FFA500', 
    borderBottomWidth: 2,
    width: 40,             
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  iconButton: {
    backgroundColor: '#1F1E1B',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderColor: '#A35709', 
    borderWidth: 1,     
    borderRadius: 6,
    marginLeft: 6,
  },
  
});