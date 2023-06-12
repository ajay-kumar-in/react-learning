import { createSlice } from '@reduxjs/toolkit';

const authInitialState = { isAuthenticated: false };
const authStore = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = action.payload
        },

        logout(state, action) {
            state.isAuthenticated = false;
        }
    }
});

export const { login, logout } = authStore.actions;
export default authStore.reducer;