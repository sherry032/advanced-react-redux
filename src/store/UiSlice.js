import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {cartIsVisible: false, notification: null },
  reducers: {
    toggleCart:(state)=>{
      state.cartIsVisible = !state.cartIsVisible
    },
    setNotification: (state, action)=>{
      state.notification = action.payload
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer