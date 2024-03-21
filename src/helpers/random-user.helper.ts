import { User } from '../types/user.type';

export function getRandomUser(users: User[]): User | null {
  if (users.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}
