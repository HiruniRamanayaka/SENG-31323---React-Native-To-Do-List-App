import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  Modal,
  View,
} from 'react-native';
import {useTaskStore} from '../../stores/useTaskStore';
import {Props} from '../../types/TaskTypes';
import styles from '../../styles/componentStyles/buttonStyles/DeleteTaskButton.style'

const DeleteTaskButton: React.FC<Props> = ({index}) => {
  const deleteTask = useTaskStore(state => state.deleteTask);
  const [modalVisible, setModalVisible] = useState(false);

  const confirmDelete = () => {
    deleteTask(index);
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.deleteButtonText}>x</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Delete This Task?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={confirmDelete}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DeleteTaskButton;

