
import { useState } from "react";
import { User } from "../../entities/user";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  function login(username: string, password: string) {
    // Example only (replace with real API call)
    setUser({
      id: "student_001",
      username: "john_doe",
      email: "john@example.com",
      role: "student"
    });
  }

  function logout() {
    setUser(null);
  }

  return { user, login, logout };
}
