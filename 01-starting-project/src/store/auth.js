import {createSlice} from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentification',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authReducers = authSlice.reducer;
export const authActions = authSlice.actions;