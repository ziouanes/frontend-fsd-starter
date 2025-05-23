import React, { useEffect, useState } from "react";
import Card from "../widgets/Card";

type FileMeta = {
  file_id: string;
  filename: string;
  url: string;
  description: string;
  uploader_id: string;
  upload_date: string;
};

export default function Files() {
  const [files, setFiles] = useState<FileMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/files")
      .then((r) => r.json())
      .then(setFiles)
      .catch(() => setFiles([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="container">Chargement…</p>;

  return (
    <div className="container">
      <h2>Fichiers disponibles</h2>

      {/* --- Card grid view --- */}
      <div className="card-grid">
        {files.map((f) => (
          <div key={f.file_id} className="card" style={{ position: "relative" }}>
            <div className="card-icon">📂</div>
            <h3 style={{ wordBreak: "break-all" }}>{f.filename}</h3>
            <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
              {f.description || "—"}
              <br />
              <small>
                Ajouté par {f.uploader_id} <br />
                {new Date(f.upload_date).toLocaleString()}
              </small>
            </p>
            <a
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              download
              style={{ textDecoration: "none" }}
            >
              <button style={{ width: "100%" }}>Télécharger</button>
            </a>
          </div>
        ))}
      </div>

      {/* --- Optional detailed table view below --- */}
      <h3 style={{ marginTop: "2rem" }}>Liste détaillée</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Uploader</th>
            <th>Date</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {files.map((f) => (
            <tr key={f.file_id}>
              <td>{f.filename}</td>
              <td>{f.description}</td>
              <td>{f.uploader_id}</td>
              <td>{new Date(f.upload_date).toLocaleString()}</td>
              <td>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <button>Télécharger</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
