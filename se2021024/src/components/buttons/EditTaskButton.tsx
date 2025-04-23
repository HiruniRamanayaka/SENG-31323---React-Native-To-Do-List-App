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
        <Ionicons name="pencil-outline" size={20} color="#fff" />
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

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: '#1F1E1B',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderColor: '#A35709',
    borderWidth: 1,
    borderRadius: 6,
    marginLeft: 6,
  },
  iconText: {
    color: 'white',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 10,
  },
  modalContainer: {
    backgroundColor: '#333',
    padding: 20,
    width: 360,
    height: 450,
  },
  input: {
    borderColor: '#A35709',
    borderWidth: 1,
    backgroundColor: '#1F1E1B',
    color: 'white',
    borderRadius: 6,
    marginBottom: 10,
    padding: 8,
  },
  inputAbout: {
    borderColor: '#A35709',
    borderWidth: 1,
    backgroundColor: '#1F1E1B',
    color: 'white',
    borderRadius: 6,
    marginBottom: 10,
    padding: 8,
    height: 320,
    textAlignVertical: 'top',
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10',
  },
  buttons: {
    width: 100,
    backgroundColor: '#1F1E1B',
    borderColor: '#A35709',
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
  },
});
