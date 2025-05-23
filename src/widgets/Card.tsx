import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
