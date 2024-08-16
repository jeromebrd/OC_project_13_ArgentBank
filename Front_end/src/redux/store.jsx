import { configureStore } from '@reduxjs/toolkit';
import firstNameReducer from '../features/slices/firstName';
import lastNameReducer from '../features/slices/lastName';
import tokenReducer from '../features/slices/token';

export const store = configureStore({
  reducer: {
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    token: tokenReducer,
  },
});
