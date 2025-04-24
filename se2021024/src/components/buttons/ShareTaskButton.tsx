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
import styles from '../../styles/componentStyles/buttonStyles/ShareTaskButton.style'

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
        <Ionicons name="share-social" size={16} color="#fff" />
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
