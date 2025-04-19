import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTask = async (task: {title: String; about: String}) => {
    try {
        const jsonValue = JSON.stringify(task);
        await AsyncStorage.setItem('task', jsonValue);
        console.log('Task saved successfully');
    }catch (e){
        throw new Error("Failed to save task"+(e));
    }
}