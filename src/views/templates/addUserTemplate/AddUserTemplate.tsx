import { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../redux/userReducer";

const AddUserTemplate: FC = () => {
  const userList = useSelector<any, any>((state) => state.user.list);
  const dispatch = useDispatch();

  const formRef = useRef<HTMLFormElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const isAdminRef = useRef<HTMLInputElement>(null);

  const add = (e: any) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const isAdmin = isAdminRef.current?.checked;
    dispatch(
      addUser({
        username,
        isAdmin,
      })
    );
    formRef.current?.reset();
  };

  return (
    <>
      <form ref={formRef}>
        <input ref={usernameRef} placeholder={"username"} type="text" />
        <input ref={isAdminRef} type="checkbox" />
        <span>isAdmin</span>
        <button type="submit" onClick={add}>
          Add User
        </button>
      </form>
      <ul>
        {userList.map((el: any, i: number) => (
          <li key={i}>
            {el.username} {el.isAdmin && "(admin)"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AddUserTemplate;
