import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import Sidebar from "./compornents/sidebar/Sidebar";
import Chat from "./compornents/chat/Chat";
import userEvent from "@testing-library/user-event";
import userSlice from "./features/userSlice";

function App() {
  // const user = useSelector((state) => state.user.user);
  const user = null;

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
