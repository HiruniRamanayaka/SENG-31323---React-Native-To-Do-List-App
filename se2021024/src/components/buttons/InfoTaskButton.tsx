import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  Modal,
  View,
} from 'react-native';

import {useTaskStore} from '../../stores/useTaskStore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Props} from '../../types/TaskTypes';
import styles from '../../styles/componentStyles/buttonStyles/InfoTaskButton.style'

const InfoTaskButton: React.FC<Props> = ({index}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const task = useTaskStore(state => state.tasks[index]);

  return (
    <>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setModalVisible(true)}>
        <Ionicons name="information-outline" size={16} color="#fff" />
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Task Info</Text>
            <Text style={styles.content}>Title: {task.title}</Text>
            <Text style={styles.content}>About: {task.about}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default InfoTaskButton;

