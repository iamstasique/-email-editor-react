import { Action } from 'redux';
import { SetCurrentUserAction, UserActions } from './users.action';
import { INITIAL_USER_STATE, UsersState } from './users.state';

export const userReducer = (state: UsersState = INITIAL_USER_STATE, action: Action) => {
  switch (action.type) {
    case UserActions.GetUsers: {
      return { ...state };
    }
    // TODO: does redux have EFFECTS
    // case UserActions.GetCurrentUser: {
    //   return { ...state, currentUser: (action as GetCurrentUserAction).id };
    // }
    case UserActions.SetCurrentUser: {
      // TODO: does redux have EFFECTS
      return { ...state, currentUser: (action as SetCurrentUserAction).user };
    }
    default: {
      return { ...state };
    }
  }
};
