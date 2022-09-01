import { configureStore } from "@reduxjs/toolkit";

import counterReduer from "./createSlice";

export default configureStore({
  reducer: {
    counter: counterReduer,
  },
});
