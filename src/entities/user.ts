
export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  username: string;
  email: string;
  photoUrl?: string;
  role: UserRole;
  [key: string]: any;
}
