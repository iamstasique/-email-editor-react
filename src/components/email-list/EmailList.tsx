import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { emailService } from '../../services/email.service';
import { getEmailsFromState } from '../../store/emails/emails.state';
import { Email } from '../../types/email.type';
import { EmailListItem } from '../email-list-item/EmailListItem';
import style from './EmailList.module.scss';

function EmailList(props: { emails: Email[] }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    emailService.getEmails().then((emails: Email[]) => {
      if (!scrollRef?.current || !emails.length) {
        return;
      }

      // TODO: scroll doesn't work after page refresh (only after code saving)
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  }, []);

  return (
    <>
      <div className={style['email-list']}>
        {props.emails?.map((email: Email) => (
          <EmailListItem key={email.id} email={email} />
        ))}
        <div ref={scrollRef}></div>
      </div>
    </>
  );
}

export default connect(getEmailsFromState)(EmailList);
