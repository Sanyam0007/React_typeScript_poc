import { useState } from "react";

export const Loggedin = () => {
  const [isLoggedIn, setLogin] = useState(false);

  const handleLogIn = () => {
    setLogin(true);
  };
  const handleLogOut = () => {
    setLogin(false);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>User is {isLoggedIn ? "Logged In" : "Logged Out"}</div>
    </div>
  );
};
