import { Action } from 'redux';
import { EmailActions, GetEmailsActionFailure, GetEmailsActionSuccess, SendEmailAction } from './emails.action';
import { EmailState, INITIAL_EMAIL_STATE } from './emails.state';

export const emailReducer = (state: EmailState = INITIAL_EMAIL_STATE, action: Action) => {
  switch (action.type) {
    case EmailActions.GetEmails: {
      return { ...state, loading: true };
    }
    case EmailActions.GetEmailsSuccess: {
      return {
        ...state,
        emails: (action as GetEmailsActionSuccess).emails,
        error: '',
        loading: false,
      };
    }
    case EmailActions.GetEmailsSuccess: {
      return {
        ...state,
        error: (action as GetEmailsActionFailure).error,
        emails: [],
        loading: false,
      };
    }

    case EmailActions.SendEmail: {
      return { ...state, emails: [...state.emails, (action as SendEmailAction).email] };
    }
    default: {
      return { ...state };
    }
  }
};
