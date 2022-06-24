import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [
      {
        username: "admin",
        isAdmin: true,
      },
      {
        username: "user1",
        isAdmin: false,
      },
      {
        username: "user2",
        isAdmin: false,
      },
      {
        username: "user3",
        isAdmin: false,
      },
      {
        username: "user4",
        isAdmin: false,
      },
    ],
  },
  reducers: {
    addUser: (state: any, action: any) => {
      const userData = action.payload;
      state.list.push(userData);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
