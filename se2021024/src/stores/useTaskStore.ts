import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task} from '../types/StoreTypes';

type TaskState = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (index: number) => void; 
  updateTask: (index: number, updatedTask: Task) => void;
  toggleTaskCompletion: (index: number) => void; 
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

      // Deleting tasks
      deleteTask: (index: number) =>
        set((state) => ({
            tasks: state.tasks.filter((_, i) => i !== index),
        })),

      // Update tasks
      updateTask: (index: number, updatedTask: Task) =>
        set((state) => {
          const updatedTasks = [...state.tasks];
          updatedTasks[index] = updatedTask;
          return { tasks: updatedTasks };
        }),
      
      // Completing Tasks
      toggleTaskCompletion: (index) =>
        set((state) => {
          const updatedTasks = [...state.tasks];
          updatedTasks[index] = {
            ...updatedTasks[index],
            completed: !updatedTasks[index].completed,
          };
          return { tasks: updatedTasks };
      }),

      // Clearing tasks
      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: 'task-storage', // This is your AsyncStorage key
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
