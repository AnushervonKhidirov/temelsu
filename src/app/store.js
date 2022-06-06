import { configureStore } from '@reduxjs/toolkit';

import menuReducer from './menuAction';

export const store = configureStore({
    reducer: {
        menu: menuReducer
    }
});