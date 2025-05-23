import React from "react";
import Card from "../widgets/Card";

export default function Home() {
  const items = [
    { title: "Messagerie", description: "Boîte mail étudiante", icon: "📧" },
    { title: "Notes", description: "Consultez vos notes", icon: "📝" },
    { title: "Calendrier", description: "Calendrier d'examens", icon: "📅" },
    { title: "Cours en ligne", description: "Accès Moodle", icon: "💡" },
    { title: "Assistance", description: "Support ENT", icon: "🆘" },
  ];

  return (
    <div className="container">
      <div className="logo-container">
        <img
          src="/src/public/logo.jpg"
          alt="Université Mohammed V de Rabat"
          className="university-logo"
        />
      </div>
      <div className="card-grid">
        {items.map((it) => (
          <Card key={it.title} {...it} />
        ))}
      </div>
    </div>
  );
}
