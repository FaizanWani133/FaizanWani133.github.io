// AppStore.js
import {create} from 'zustand';

// Define your initial theme state
const initialState = {
  lightTheme: true,
};

// Create a Zustand store
const useAppStore = create(set => ({
  // Initialize state with the initial state
  ...initialState,

  // Method to toggle the theme
  toggleTheme: () =>
    set(state => ({
      ...state,lightTheme:!state.lightTheme
    })),

  // Method to reset the theme to the initial state
  resetTheme: () => set(() => initialState),
}));

export default useAppStore;
