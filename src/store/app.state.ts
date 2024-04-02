import { EmailState, INITIAL_EMAIL_STATE } from './emails/emails.state';
import { INITIAL_USER_STATE, UsersState } from './users/users.state';

export type AppState = {
  emailState: EmailState;
  userState: UsersState;
};

export const INITIAL_APP_STATE: AppState = {
  emailState: INITIAL_EMAIL_STATE,
  userState: INITIAL_USER_STATE,
};
