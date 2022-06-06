import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        value: false
    },
    reducers: {
        menuHandler: (state, actions) => {
            state.value = actions.payload ? actions.payload : !state.value;
        }
    }
});

export const { menuHandler } = menuSlice.actions;

export default menuSlice.reducer;