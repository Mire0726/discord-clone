import React from "react";
import "./App.scss";
import Sidebar from "./compornents/sidebar/Sidebar";
import Chat from "./compornents/chat/Chat";

function App() {
  return (
    <div className="App">
      {/* sidebar*/}
      <Sidebar />

      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
