import React from "react";
import { useUsers } from "../features/users/useUsers";
import Card from "../widgets/Card";

export default function Students() {
  const students = useUsers("student");

  return (
    <div className="container">
      <h2>Étudiants inscrits</h2>

      {/* Card grid view */}
      <div className="card-grid" style={{ marginBottom: "2rem" }}>
        {students.map((s) => (
          <Card
            key={s.id}
            title={s.username}
            description={s.email}
            icon="🎓"
          />
        ))}
      </div>

      {/* Simple list view (optional) */}
      <h3>Liste détaillée</h3>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <strong>{s.username}</strong> — {s.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
