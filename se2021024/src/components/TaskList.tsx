import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {useTaskStore} from '../stores/useTaskStore';
import DeleteTaskButton from './buttons/DeleteTaskButton';
import InfoTaskButton from './buttons/InfoTaskButton';
import EditTaskButton from './buttons/EditTaskButton';
import ShareTaskButton from './buttons/ShareTaskButton';
import styles from '../styles/componentStyles/TaskList.style'

const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks);
  const [selectedTaskIndex, setSelectedTaskIndex] = React.useState<number | null>(null);

  return (
    <View style={styles.listContainer}>
      {tasks.length === 0 ? (
        <View style={styles.borderText}>
          <Text style={styles.topBorder}></Text>
          <Text style={styles.emptyText}>No tasks</Text>
          <Text style={styles.bottomBorder}></Text>
        </View>
      ) : (
        tasks.map((task, index) => (
          <View key={index}>
            <View style={styles.taskItem}>
              <View style={styles.taskItemContainer}>
                <TouchableOpacity
                  onPress={() =>
                    setSelectedTaskIndex(
                      index === selectedTaskIndex ? null : index,
                    )
                  }>
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
                    <ShareTaskButton index={index} />
                    <InfoTaskButton index={index} />
                    <EditTaskButton index={index} />
                </View>
              )}
            </View>
          </View>
        ))
      )}
    </View>
  );
};

export default TaskList;
