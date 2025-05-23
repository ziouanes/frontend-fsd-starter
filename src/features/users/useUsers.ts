
import { useState, useEffect } from "react";
import { User } from "../../entities/user";

export function useUsers(role: "student" | "teacher" | "admin") {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/users?role=${role}`)
      .then(res => res.json())
      .then(setUsers);
  }, [role]);
  return users;
}
