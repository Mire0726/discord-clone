import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import Sidebar from "./compornents/sidebar/Sidebar";
import Chat from "./compornents/chat/Chat";
import userEvent from "@testing-library/user-event";
import userSlice from "./features/userSlice";
import Login from "./compornents/login/Login";
import { useAppSelector } from "./app/hooks";

function App() {
  const user = useAppSelector((state) => state.user);
  // const user = null;
  console.log(user);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />

          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
