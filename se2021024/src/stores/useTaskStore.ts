import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Task = {
  title: string;
  about: string;
};

type TaskState = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (index: number) => void; 
  clearTasks: () => void;
};

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      // Adding tasks
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      // Adding tasks
      deleteTask: (index: number) =>
        set((state) => ({
            tasks: state.tasks.filter((_, i) => i !== index),
        })),

      // Clearing tasks
      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: 'task-storage', // This is your AsyncStorage key
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
