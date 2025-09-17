import React, { useState } from "react";

const AddUser: React.FC = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch(`http://127.0.0.1:8000/add?id=${id}&name=${name}`, {
        method: "POST",
      });
      const data = await response.json();
      setMessage(data.message || "Error");
    } catch (err) {
      setMessage("Failed to add user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="ID"
        value={id}
        onChange={e => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <button type="submit">Add User</button>
      <div>{message}</div>
    </form>
  );
};

export default AddUser;