import { Action } from 'redux';
import { User } from '../../types/user.type';

export enum UserActions {
  GetUsers = '[USER] Get Users',

  GetCurrentUser = '[USER] Get Current User',
  SetCurrentUser = '[USER] Set Current User',
}

type GetCurrentUser = {
  id: string;
};
type SetCurrentUser = {
  user: User;
};

export type GetCurrentUserAction = GetCurrentUser & Action<UserActions>;
export type SetCurrentUserAction = SetCurrentUser & Action<UserActions>;

export function getUsers(): Action<UserActions.GetUsers> {
  return { type: UserActions.GetUsers };
}

export function getCurrentUser(id: string): GetCurrentUserAction {
  return { type: UserActions.GetCurrentUser, id };
}

export function setCurrentUser(user: User): SetCurrentUserAction {
  return { type: UserActions.GetCurrentUser, user };
}
