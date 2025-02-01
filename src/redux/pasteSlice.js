import { createSlice } from '@reduxjs/toolkit';

// Initialize state with localStorage or an empty array
const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    // Add a new paste
    addToPastes: (state, action) => {
      
    },
    // Update an existing paste
    updateToPastes: (state, action) => {
    
    },
    // Reset all pastes
    resetAllPastes: (state) => {
      
    },
    // Remove a specific paste
    removeFromPaste: (state, action) => {
     
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToPastes,
  updateToPastes,
  resetAllPastes,
  removeFromPaste, // Fixed typo
} = pasteSlice.actions;

export default pasteSlice.reducer;
