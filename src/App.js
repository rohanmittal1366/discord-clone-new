import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { login, logout } from "./features/userSlice";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("auth user is", authUser);
      // debugger
      if (authUser) {
        dispatch(login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
         dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
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
