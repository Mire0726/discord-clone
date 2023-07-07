import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import Sidebar from "./compornents/sidebar/Sidebar";
import Chat from "./compornents/chat/Chat";
import userEvent from "@testing-library/user-event";
import userSlice, { logout } from "./features/userSlice";
import Login from "./compornents/login/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function App() {
  const user = useAppSelector((state) => state.user);
  // const user = null;
  // console.log(user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />

          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
