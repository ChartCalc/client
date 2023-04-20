import { configureStore } from '@reduxjs/toolkit';
import dispersion from "../features/slices/dispersionSlice";
export const store = configureStore({
  reducer: {
    dispersion
  },
});
