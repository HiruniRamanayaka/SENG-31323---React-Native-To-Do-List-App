import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  View,
} from 'react-native';

import {useTaskStore} from '../../stores/useTaskStore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Props} from '../../types/TaskTypes';
import styles from '../../styles/componentStyles/buttonStyles/EditTaskButton.style'

const EditTaskButton: React.FC<Props> = ({index}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {tasks, updateTask} = useTaskStore();
  const task = tasks[index];

  const [title, setTitle] = useState(task.title);
  const [about, setAbout] = useState(task.about);

  const handleSave = () => {
    updateTask(index, {title, about});
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setModalVisible(true)}>
        <Ionicons name="pencil-outline" size={16} color="#fff" />
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="Title"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.inputAbout}
              value={about}
              onChangeText={setAbout}
              placeholder="About"
              placeholderTextColor="#999"
              multiline
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default EditTaskButton;

