import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveMessage } from "../../../redux/messageReducer";

const AdminTemplate: FC = () => {
  const dispatch = useDispatch();
  const [owner, setOwner] = useState<string>("");

  const users = useSelector<any, any>((state) => {
    return state.user.list.filter((u: any) => !u.isAdmin);
  });

  const sentList = useSelector<any, any>((state) => {
    return state.message.list.filter((m: any) => m.from === owner);
  });

  const inboxList = useSelector<any, any>((state) => {
    return state.message.list.filter((m: any) => m.to === owner && m.approved);
  });

  const changeOwner = (e: any) => {
    setOwner(e.target.value);
  };

  const approve = (id: number) => {
    dispatch(approveMessage(id));
  };

  return (
    <>
      <select value={owner} onChange={changeOwner}>
        <option value="" disabled>
          select user
        </option>
        {users.map((u: any) => (
          <option key={u.username} value={u.username}>
            {u.username}
          </option>
        ))}
      </select>

      <h3>sent</h3>
      <ul>
        {sentList.map((m: any, i: number) => (
          <li key={i}>
            (to: {m.to}) {m.text}{" "}
            {!m.approved && (
              <button onClick={() => approve(m.id)}>Approve</button>
            )}
          </li>
        ))}
      </ul>

      <h3>inbox</h3>
      <ul>
        {inboxList.map((m: any, i: number) => (
          <li key={i}>
            (from: {m.from}) {m.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminTemplate;
