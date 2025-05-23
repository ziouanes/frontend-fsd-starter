import React from "react";
import { useUsers } from "../features/users/useUsers";
import Card from "../widgets/Card";

export default function Teachers() {
  const teachers = useUsers("teacher");

  return (
    <div className="container">
      <h2>Enseignants</h2>

      {/* Card grid view */}
      <div className="card-grid" style={{ marginBottom: "2rem" }}>
        {teachers.map((t) => (
          <Card
            key={t.id}
            title={t.username}
            description={t.email}
            icon="👩‍🏫"
          />
        ))}
      </div>

      {/* Optional detailed list */}
      <h3>Liste détaillée</h3>
      <ul>
        {teachers.map((t) => (
          <li key={t.id}>
            <strong>{t.username}</strong> — {t.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
