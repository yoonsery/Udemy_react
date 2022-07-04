import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  name: 'counter',
  initialState, // line 3을 initialState로 설정하는데 이름이 같으므로 생략
  reducers: {
    increment(state) {
      state.counter++; // react에서는 state를 직접적으로 변경하면 절대 안된다 하지만 리덕스 툴킷에서는 state를 직접적으로 변경하는 것처럼 보일 뿐임
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
