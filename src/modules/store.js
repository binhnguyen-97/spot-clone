import { configureStore } from '@reduxjs/toolkit';
import discoverReducer from "./discoverReducer";

export default configureStore({
  reducer: {
    discover: discoverReducer,
  }
})
