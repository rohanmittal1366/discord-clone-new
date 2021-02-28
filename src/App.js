//https://material-ui.com/components/material-icons/
import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";
// import {Fragement} from 'react';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? (
        <div>
          <Sidebar />
          <Chat />
        </div>
      ) : (
        <Login />
        // <h2>I am login</h2>
      )}
    </div>
  );
}

export default App;
