import axios from 'axios';
import { Email } from '../types/email.type';

class EmailService {
  private url: string = 'http://localhost:3000/emails';

  async getEmails(): Promise<Email[]> {
    const { data } = await axios.get<Email[]>(this.url);
    return data;
  }

  async sendEmail(email: Email) {
    const { data } = await axios.post(this.url, email);
    return data;
  }
}

export const emailService = new EmailService();
