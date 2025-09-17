import React, { useState } from "react";

const GetUser: React.FC = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleFetch = async () => {
    setName("");
    try {
      const response = await fetch(`http://127.0.0.1:8000/get_data/${id}`);
      const data = await response.json();
      setName(data);
    } catch {
      setName("Not found");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="ID"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button onClick={handleFetch}>Get User</button>
      <div>{name && `Name: ${name}`}</div>
    </div>
  );
};

export default GetUser;