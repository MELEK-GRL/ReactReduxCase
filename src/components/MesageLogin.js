import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setUserName,
  setEmail,
  setTextArea,
  login,
} from "../store/mesaggeStore";

export default function MesageLogin() {
  const { username, email, textarea } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const UserNameHandle = (e) => {
    e.preventDefault();
    dispatch(setUserName(e.target.value));
  };

  const EmailHandle = (e) => {
    e.preventDefault();
    dispatch(setEmail(e.target.value));
  };

  const PasswordHandle = (e) => {
    e.preventDefault();
    dispatch(setTextArea(e.target.value));
  };

  const submitHanle = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: username,
        email: email,
        textarea: textarea,
        loggdIn: true,
      })
    );
  };

  return (
    <div className="flex w-full items-center justify-center">
    <div className="w-full md:w-[60%] lg:w-[40%] flex ">
    <form
        onSubmit={(e) => submitHanle(e)}
        className="flex  flex-col p-4 rounded gap-4 bg-gray-900 w-full"
      >
        <input
          required
          value={username}
          onClick={UserNameHandle}
          type="text"
          name="name"
          placeholder="Name"
          className="p-1 rounded"
        />
        <input
          required
          value={email}
          onClick={EmailHandle}
          type="text"
          name="email"
          placeholder="E-mail"
          className="p-1 rounded"
        />
        <textarea
          required
          value={textarea}
          onClick={PasswordHandle}
          placeholder="Mesage.."
          name="textarea"
          className="h-[100px] rounded max-h-[110px] placeholder:p-1 "
        />
        <button className="hoverBtn">SEND MESSAGE</button>
      </form>
    </div>
    </div>
  );
}