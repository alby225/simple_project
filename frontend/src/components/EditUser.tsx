import React, { useState } from "react";

const EditUser: React.FC = () => {
  const [id, setId] = useState("");
  const [newName, setNewName] = useState("");
  const [message, setMessage] = useState("");

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch(`http://127.0.0.1:8000/edit/${id}/${newName}`, {
        method: "PUT",
      });
      const data = await response.json();
      setMessage(data.message || "Edited");
    } catch {
      setMessage("Edit failed");
    }
  };

  return (
    <form onSubmit={handleEdit}>
      <input
        type="number"
        placeholder="ID to edit"
        value={id}
        onChange={e => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="New Name"
        value={newName}
        onChange={e => setNewName(e.target.value)}
        required
      />
      <button type="submit">Edit User</button>
      <div>{message}</div>
    </form>
  );
};

export default EditUser;