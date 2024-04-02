import axios from 'axios';
import { STORE } from '../store';
import { getEmailsAction, getEmailsActionFailure, getEmailsActionSuccess, sendEmailAction } from '../store/emails/emails.action';
import { Email } from '../types/email.type';

class EmailService {
  private url: string = 'http://localhost:3000/emails';

  async getEmails(): Promise<Email[]> {
    STORE.dispatch(getEmailsAction());

    return axios
      .get<Email[]>(this.url)
      .then(({ data: emails }) => {
        STORE.dispatch(getEmailsActionSuccess(emails));
        return emails;
      })
      .catch((error) => {
        getEmailsActionFailure(error.message);
        return [];
      });
  }

  async sendEmail(email: Email) {
    return axios.post(this.url, email).then(({ data: email }) => {
      STORE.dispatch(sendEmailAction(email));
      return email;
    });
  }
}

export const emailService = new EmailService();
