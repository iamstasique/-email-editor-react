import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../enums/query-keys.enum';
import { emailService } from '../../services/email.service';
import { Email } from '../../types/email.type';
import { EmailListItem } from '../email-list-item/EmailListItem';
import style from './EmailList.module.scss';

export function EmailList() {
  const { data: emails } = useQuery({
    queryKey: [QueryKeys.EmailList],
    queryFn: () => emailService.getEmails(),
  });

  return (
    <div className={style['email-list']}>
      {emails?.map((email: Email) => (
        <EmailListItem key={email.id} email={email}/>
      ))}
    </div>
  );
}
