import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  View,
} from 'react-native';

import {useTaskStore} from '../../stores/useTaskStore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Props} from '../../types/TaskTypes';

const InfoTaskButton: React.FC<Props> = ({index}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const task = useTaskStore(state => state.tasks[index]);

  return (
    <>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setModalVisible(true)}>
        <Ionicons name="information-outline" size={20} color="#fff" />
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#1F1E1B',
    padding: 30,
    borderRadius: 2,
    width: 300,
    borderColor: '#A35709',
    borderTopWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0E3CA',
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    color: '#F0E3CA',
    marginBottom: 6,
  },
  closeButton: {
    marginTop: 16,
    borderColor: '#A35709',
    backgroundColor: '#1B1A17',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  closeText: {
    color: 'white',
  },
});
