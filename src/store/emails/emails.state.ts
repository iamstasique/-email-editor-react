import { Email } from '../../types/email.type';

export type EmailState = {
  emails: Email[];
  loading: boolean;
  error: string;
};

export const INITIAL_EMAIL_STATE: EmailState = {
  emails: [],
  loading: false,
  error: '',
};

export const getEmailsFromState = (state: any) => ({
  emails: state.emailReducer.emails,
});
