import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./messageReducer";
import shoppingReducer from "./shoppingReducer";
import userReducer from "./userReducer";

export default configureStore({
  reducer: {
    shopping: shoppingReducer,
    user: userReducer,
    message: messageReducer,
  },
});
