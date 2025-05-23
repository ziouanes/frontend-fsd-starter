import React from "react";
import { useUsers } from "../features/users/useUsers";
import Card from "../widgets/Card";

export default function Admin() {
  const admins = useUsers("admin");

  return (
    <div className="container">
      <h2>Administrateurs</h2>

      {/* Card grid view */}
      <div className="card-grid" style={{ marginBottom: "2rem" }}>
        {admins.map((a) => (
          <Card
            key={a.id}
            title={a.username}
            description={a.email}
            icon="🛡️"
          />
        ))}
      </div>

      {/* Optional detailed list */}
      <h3>Liste détaillée</h3>
      <ul>
        {admins.map((a) => (
          <li key={a.id}>
            <strong>{a.username}</strong> — {a.email}
          </li>
        ))}
      </ul>

      {/* Admin action placeholder */}
      <hr style={{ margin: "2rem 0" }} />
      <h3>Outils d’administration</h3>
      <p>
        Ici, vous pourrez ajouter des boutons pour créer ou supprimer des
        utilisateurs, gérer les fichiers, consulter les logs, etc.
      </p>
    </div>
  );
}
