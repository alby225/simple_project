import React, { useState } from "react";

const DeleteUser: React.FC = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch(`http://127.0.0.1:8000/delete/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setMessage(data.message || "Deleted");
    } catch {
      setMessage("Delete failed");
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <input
        type="number"
        placeholder="ID to delete"
        value={id}
        onChange={e => setId(e.target.value)}
        required
      />
      <button type="submit">Delete User</button>
      <div>{message}</div>
    </form>
  );
};

export default DeleteUser;