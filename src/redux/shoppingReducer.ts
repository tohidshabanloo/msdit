import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    list: [
      {
        name: "item1",
        count: 5,
      },
      {
        name: "item2",
        count: 3,
      },
    ],
  },
  reducers: {
    addItemToShoppingList: (state: any, action: any) => {
      state.list.push(action.payload);
    },
    deleteFromList: (state: any, action: any) => {
      const index = action.payload;
      state.list.splice(index, 1);
    },
    changeCount: (state: any, action: any) => {
      const { type, index }: { type: "increase" | "decrease"; index: number } =
        action.payload;

      const newCount = state.list[index].count + (type === "increase" ? 1 : -1);

      if (newCount >= 0 && newCount <= 10) state.list[index].count = newCount;
    },
  },
});

export const { addItemToShoppingList, deleteFromList, changeCount } =
  shoppingSlice.actions;

export default shoppingSlice.reducer;
