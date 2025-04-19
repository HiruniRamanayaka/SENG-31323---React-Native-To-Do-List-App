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
  clearTasks: () => void;
};

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),
      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: 'task-storage', // This is your AsyncStorage key
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
