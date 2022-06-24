import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    list: [
      {
        from: "user1",
        to: "user2",
        text: "hello",
        approved: true,
        id: 0,
      },
      {
        from: "user1",
        to: "user2",
        text: "hello, Not Approved",
        approved: false,
        id: 1,
      },
      {
        from: "user2",
        to: "user1",
        text: "aleyke hello",
        approved: true,
        id: 2,
      },
    ],
  },
  reducers: {
    sendMessage: (state: any, action: any) => {
      const messageData = action.payload;
      const d = new Date();
      const id = d.getTime();
      state.list.push({
        ...messageData,
        approved: false,
        id,
      });
    },
    approveMessage: (state: any, action: any) => {
      const messageId = action.payload;

      const message = state.list.find((m: any) => m.id === messageId);
      message.approved = true;
    },
  },
});

export const { sendMessage, approveMessage } = messageSlice.actions;

export default messageSlice.reducer;

// --------------------------

export const randomMessage: any =
  (info: any) => (dispatch: any, getState: any) => {
    const rand = Math.floor(Math.random() * 199) + 1;

    fetch(`https://jsonplaceholder.typicode.com/todos/${rand}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(
          sendMessage({
            ...info,
            text: `#${rand} => ${json.title}`,
          })
        );
      });
  };
