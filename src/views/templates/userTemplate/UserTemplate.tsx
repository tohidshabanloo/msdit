import { FC, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomMessage, sendMessage } from "../../../redux/messageReducer";

const UserTemplate: FC = () => {
  const dispatch = useDispatch();
  const [owner, setOwner] = useState<string>("");

  const users = useSelector<any, any>((state) => {
    return state.user.list.filter((u: any) => !u.isAdmin);
  });

  const messageList = useSelector<any, any>((state) => {
    return state.message.list.filter((m: any) => m.to === owner && m.approved);
  });

  const formRef = useRef<HTMLFormElement>(null);
  const toRef = useRef<HTMLSelectElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const changeOwner = (e: any) => {
    setOwner(e.target.value);
  };

  const send = (e: any) => {
    e.preventDefault();
    const from = owner;
    const to = toRef.current?.value;
    const text = textRef.current?.value;

    dispatch(sendMessage({ from, to, text }));

    formRef.current?.reset();
  };

  const randomSend = (e: any) => {
    e.preventDefault();
    const from = owner;
    const to = toRef.current?.value;

    dispatch(randomMessage({ from, to }));

    formRef.current?.reset();
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
      <h3>send a message:</h3>
      <form ref={formRef}>
        <select ref={toRef}>
          <option selected value="" disabled>
            select user
          </option>
          {users
            .filter((u: any) => u.username !== owner)
            .map((u: any) => (
              <option key={u.username} value={u.username}>
                {u.username}
              </option>
            ))}
        </select>
        <br />
        <textarea ref={textRef}></textarea>
        <br />
        <button type="submit" onClick={send}>
          send
        </button>
        <button onClick={randomSend}>random message</button>
      </form>
      <h3>Messages:</h3>
      <ul>
        {messageList.map((m: any, i: number) => (
          <li key={i}>
            {m.from}: {m.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserTemplate;
