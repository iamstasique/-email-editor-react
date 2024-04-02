import { User } from '../../types/user.type';

export type UsersState = {
  users: User[];
  currentUser: User | null
};

export const INITIAL_USER_STATE: UsersState = {
  users: [],
  currentUser: null
};
