import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
    userAuthData: {
        token: null,
        user: null,
        tokenExpirationMs: null
    }
};

const authStore = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state, action) {
            state.userAuthData = action.payload
        },

        logout(state, action) {
            state.userAuthData = authInitialState;
        }
    }
});

export const { login, logout } = authStore.actions;
export default authStore.reducer;