import React from "react";
import AddUser from "./components/AddUser";
import GetUser from "./components/GetUser";
import DeleteUser from "./components/DeleteUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div>
      <h1>Simple User Manager</h1>
      <AddUser />
      <hr />
      <GetUser />
      <hr />
      <DeleteUser />
      <hr />
      <EditUser />
    </div>
  );
}

export default App;