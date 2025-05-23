import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "teacher" | "admin">("student");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    // Demo authentication — replace with real API call
    login(username, password);
    const target =
      role === "student" ? "/student" : role === "teacher" ? "/teacher" : "/admin";
    navigate(target);
  }

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="text-center" style={{ marginBottom: "1rem" }}>
          Connexion
        </h2>

        <label className="mb-2">Nom d’utilisateur</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />

        <label className="mb-2" style={{ marginTop: "1rem" }}>
          Mot de passe
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />

        <label className="mb-2" style={{ marginTop: "1rem" }}>
          Rôle
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as any)}
          style={{ width: "100%" }}
        >
          <option value="student">Étudiant</option>
          <option value="teacher">Enseignant</option>
          <option value="admin">Admin</option>
        </select>

        {error && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i> {error}
          </div>
        )}

        <button type="submit" style={{ width: "100%", marginTop: "1.5rem" }}>
          Se connecter
        </button>
      </form>
    </div>
  );
}
