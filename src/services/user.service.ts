import axios from 'axios';
import { User } from '../types/user.type';

class UserService {
  private url: string = 'http://localhost:3000/users';

  async getUsers(): Promise<User[]> {
    const { data: users }: { data: User[] } = await axios.get(this.url);
    return users;
  }

  async getUserById(id: string): Promise<User> {
    const { data: user }: { data: User } = await axios.get(`${this.url}/${id}`);
    return user;
  }
}

export const userService: UserService = new UserService();
