import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import { Email } from '../../types/email.type';
import { User } from '../../types/user.type';
import style from './EmailListItem.module.scss';
import { ANOTHER_USER_STYLES, CURRENT_USER_STYLES } from '../../styles/styles.constant';
import { localStorageService } from '../../services/local-storage.service';

export function EmailListItem({ email }: { email: Email }) {
  //   const { data: sender } = useQuery({
  //     queryKey: [QueryKeys.UserList],
  //     queryFn: () => userService.getUserById(email.senderId),
  //   });

  const [sender, setSender] = useState<User | null>(null);
  const isCurrentUser = sender?.id === localStorageService.getCurrentUserId();

  useEffect(() => {
    const fetchData = async () => {
      const user = await userService.getUserById(email.senderId);
      setSender(user);
    };

    fetchData();

    return () => setSender(null);
  }, [email.senderId]);

  return (
    <div className={style['email-list-item']} style={isCurrentUser ? CURRENT_USER_STYLES : ANOTHER_USER_STYLES}>
      <div className={style['email-list-item-sender']}>{sender?.name}</div>
      <span className={style['email-list-item-content']}>{parse(email.text)}</span>
      <br />
      <div className={style['email-list-item-date']}>{new Date(email.date).toLocaleTimeString()}</div>
    </div>
  );
}
