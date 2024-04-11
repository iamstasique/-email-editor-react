import { useRef } from 'react';
import { useGetEmailsQuery } from '../../apis/email.api';
import { Email } from '../../types/email.type';
import { EmailListItem } from '../email-list-item/EmailListItem';
import style from './EmailList.module.scss';

function EmailList() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { data: emails, error, isLoading } = useGetEmailsQuery('');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <div className={style['email-list']}>
        {
          emails.map((email: Email) => (
            <EmailListItem key={email.id} email={email} />
          ))
        }
        <div ref={scrollRef}></div>
      </div>
    </>
  );
}

export default EmailList;
