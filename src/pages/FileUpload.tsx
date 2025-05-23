import React, { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [desc, setDesc] = useState("");
  const [uploader, setUploader] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", desc);
    formData.append("uploader_id", uploader || "frontend_user");

    try {
      const r = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      if (r.ok) {
        const data = await r.json();
        setResult("Succès ! Fichier envoyé : " + data.url);
        setFile(null);
        setDesc("");
        setUploader("");
      } else {
        setResult("Échec de l’upload.");
      }
    } catch (err) {
      setResult("Erreur : " + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 500 }}>
      <h2>Uploader un fichier</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input type="file" onChange={handleFileChange} required />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={{ width: "100%", marginTop: "0.75rem" }}
        />
        <br />
        <input
          type="text"
          placeholder="Uploader ID"
          value={uploader}
          onChange={(e) => setUploader(e.target.value)}
          style={{ width: "100%", marginTop: "0.75rem" }}
        />
        <br />
        <button
          type="submit"
          disabled={loading}
          style={{ marginTop: "1rem", width: "100%" }}
        >
          {loading ? "Envoi…" : "Upload"}
        </button>
      </form>

      {result && <p style={{ marginTop: "1rem" }}>{result}</p>}
    </div>
  );
}
