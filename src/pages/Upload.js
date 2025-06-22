import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function Upload({ token }) {
  const [form, setForm] = useState({ title: "", description: "" });
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("file", file);
    await axios.post(`${API_BASE_URL}/api/upload`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Video uploaded!");
    navigate("/feed");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Video</h2>
      <input
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
      <button type="button" onClick={() => navigate("/feed")}>
        Go to Feed
      </button>
    </form>
  );
}
