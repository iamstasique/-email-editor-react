import { Action } from 'redux';
import { Email } from '../../types/email.type';

export enum EmailActions {
  GetEmails = '[EMAIL] Get Emails',
  GetEmailsSuccess = '[EMAIL] Get Emails Success',
  GetEmailsFailure = '[EMAIL] Get Emails Failure',

  SendEmail = '[EMAIL] Send Email',
  SendEmailSuccess = '[EMAIL] Send Email Success',
  SendEmailFailure = '[EMAIL] Send Email Failure',
}

type GetEmailsSuccess = {
  emails: Email[];
};
type GetEmailsFailure = {
  error: string;
};

type SendEmail = {
  email: Email;
};

export type GetEmailsActionSuccess = GetEmailsSuccess & Action<EmailActions>;
export type GetEmailsActionFailure = GetEmailsFailure & Action<EmailActions>;

export type SendEmailAction = SendEmail & Action<EmailActions>;

export function getEmailsAction(): Action<EmailActions.GetEmails> {
  return { type: EmailActions.GetEmails };
}
export function getEmailsActionSuccess(emails: Email[]): GetEmailsActionSuccess {
  return { type: EmailActions.GetEmailsSuccess, emails };
}
export function getEmailsActionFailure(error: string = 'something went wrong'): GetEmailsActionFailure {
  return { type: EmailActions.GetEmailsFailure, error };
}

export function sendEmailAction(email: Email): SendEmailAction {
  return { type: EmailActions.SendEmail, email };
}
