import { createSlice } from '@reduxjs/toolkit';


const counterInitialState = { count: 0 };
//reducer or slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        incriment(state, action) {
            state.count += 1;
        },
        
        decriment(state, action) {
            state.count -= 1;
        },
        
        increaseByValue(state, action) {
            state.count += action.payload.value;
        }
    }
});

export const { incriment, decriment, increaseByValue } = counterSlice.actions;
export default counterSlice.reducer;