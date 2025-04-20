import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert, Modal, View } from 'react-native';
import { useTaskStore } from '../stores/useTaskStore';

type Props = {
    index: number;
  };

const DeleteTaskButton: React.FC<Props> = ({ index }) => {
    const deleteTask = useTaskStore((state => state.deleteTask));
    const [modalVisible, setModalVisible] = useState(false);

    const confirmDelete = () => {
      deleteTask(index);
      setModalVisible(false);
    }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.deleteButtonText}>x</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType='fade'
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Delete This Task?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.deleteButton} onPress={confirmDelete}>
                  <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>  
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default DeleteTaskButton

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    alignSelf: 'flex-end',
    backgroundColor: '#1B1A17',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 5,
    borderColor: '#A35709', 
    borderWidth: 2,                
    padding: 10,    
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#D9D9D9',
  },
  deleteButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FF8303',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    height: 200,
    backgroundColor: '#1F1E1B',
    padding: 20,
    alignItems: 'center',
    borderColor: '#A35709', 
    borderTopWidth: 2,
    borderRadius: 4,              
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 400,
    alignItems: 'center',
    margin: 40,
    color: 'white',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: '10',
  },
  deleteButton: {
    backgroundColor: '#1F1B1E',
    padding: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    borderColor: '#A35709', 
    borderWidth: 1,
    borderRadius: 8,              
    marginBottom: 8,
  },
  cancelButton: {
    backgroundColor: '#1F1B1E',
    padding: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    borderColor: '#A35709', 
    borderWidth: 1,
    borderRadius: 8,              
    marginBottom: 8,
  },
});

