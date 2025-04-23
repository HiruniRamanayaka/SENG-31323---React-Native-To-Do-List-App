import React, {useState} from 'react';
import {
  Modal,
  View,
  Share,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {useTaskStore} from '../../stores/useTaskStore';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Props} from '../../types/TaskTypes';

const ShareTaskButton: React.FC<Props> = ({index}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const task = useTaskStore(state => state.tasks[index]);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this task:\n\n${task.title}\n${task.about}`,
      });
      setModalVisible(false);
    } catch (error) {
      console.log('Share error:', error);
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setModalVisible(true)}>
        <Ionicons name="share-social" size={20} color="#fff" />
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.logoButtons} onPress={handleShare}>
              <Ionicons name="copy-outline" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoButtons} onPress={handleShare}>
              <Icon name="vk" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoButtons} onPress={handleShare}>
              <Icon name="paper-plane" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoButtons} onPress={handleShare}>
              <Icon name="whatsapp" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoButtons} onPress={handleShare}>
              <Icon name="facebook" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default ShareTaskButton;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.89)',
    justifyContent: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1F1E1B',
    margin: 20,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  logoButtons: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginHorizontal: 5,
    backgroundColor: '#2C2B29',
    alignItems: 'center',
    justifyContent: 'center',
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
