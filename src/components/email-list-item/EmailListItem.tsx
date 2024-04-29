import parse from 'html-react-parser';
import { localStorageService } from '../../services/local-storage.service';
import { ANOTHER_USER_STYLES, CURRENT_USER_STYLES } from '../../styles/styles.constant';
import { Email } from '../../types/email.type';
import style from './EmailListItem.module.scss';
import { useGetUserQuery } from '../../apis/user.api';

export function EmailListItem({ email }: { email: Email }) {
  const { data: sender } = useGetUserQuery(email.senderId);
  const isCurrentUser = sender?.id === localStorageService.getCurrentUserId();

  return (
    <div className={style['email-list-item']} style={isCurrentUser ? CURRENT_USER_STYLES : ANOTHER_USER_STYLES}>
      <div className={style['email-list-item-sender']}>{sender?.name}</div>
      <span className={style['email-list-item-content']}>{parse(email.text)}</span>
      <br />
      <div className={style['email-list-item-date']}>{new Date(email.date).toLocaleTimeString()}</div>
    </div>
  );
}
