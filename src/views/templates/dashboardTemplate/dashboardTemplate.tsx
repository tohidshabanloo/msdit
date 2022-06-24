import { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToShoppingList,
  changeCount,
  deleteFromList,
} from "../../../redux/shoppingReducer";

const DashboardTemplate: FC = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector<any, any>((state) => state.shopping.list);

  const formRef = useRef<HTMLFormElement>(null);
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemCountRef = useRef<HTMLInputElement>(null);

  const addToList = (e: any) => {
    e.preventDefault();
    const name: string | undefined = itemNameRef.current?.value;
    const count: number = Number(itemCountRef.current?.value);
    dispatch(
      addItemToShoppingList({
        name,
        count,
      })
    );
    formRef.current?.reset();
  };

  const deleteItem = (index: number) => {
    dispatch(deleteFromList(index));
  };

  const increase = (index: number) => {
    dispatch(
      changeCount({
        type: "increase",
        index,
      })
    );
  };
  const decrease = (index: number) => {
    dispatch(
      changeCount({
        type: "decrease",
        index,
      })
    );
  };

  return (
    <>
      <form ref={formRef}>
        <input type="text" ref={itemNameRef} placeholder="name" />
        <input type="number" ref={itemCountRef} placeholder="count" />
        <button type="submit" onClick={addToList}>
          add to list
        </button>
      </form>
      <hr />

      <ul>
        {shoppingList.map((el: any, i: number) => (
          <li key={i}>
            {el.name} ({el.count})
            <button onClick={() => deleteItem(i)}>delete</button>
            <button onClick={() => increase(i)}>+</button>
            <button onClick={() => decrease(i)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DashboardTemplate;
