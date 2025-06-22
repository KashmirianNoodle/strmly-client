import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Feed() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/videos").then(res => setVideos(res.data));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Video Feed</h2>
        <button onClick={() => navigate("/upload")}>Upload Video</button>
      </div>

      {videos.map((v, i) => (
        <div key={i} style={{ marginBottom: "2rem", background: "#fff", padding: "1rem", borderRadius: "8px" }}>
          <h4>{v.title}</h4>
          <video controls src={v.videoUrl} style={{ width: "100%", maxWidth: "500px" }} />
          <p>By {v.uploader} on {new Date(v.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
