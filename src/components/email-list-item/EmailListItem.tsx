import { Card, CardContent, Typography } from '@mui/material';
import parse from 'html-react-parser';
import { useGetUserQuery } from '../../apis/user.api';
import { localStorageService } from '../../services/local-storage.service';
import { ANOTHER_USER_STYLES, CURRENT_USER_STYLES } from '../../styles/styles.constant';
import { Email } from '../../types/email.type';
import style from './EmailListItem.module.scss';

export function EmailListItem({ email }: { email: Email }) {
  const { data: sender } = useGetUserQuery(email.senderId);
  const isCurrentUser = sender?.id === localStorageService.getCurrentUserId();

  return (
    <Card sx={{overflow: 'initial', backgroundColor: "inherit"}}>
      <CardContent className={style['email-list-item']} style={isCurrentUser ? CURRENT_USER_STYLES : ANOTHER_USER_STYLES}>
        <Typography className={style['email-list-item-sender']}>{sender?.name}</Typography>
        <Typography className={style['email-list-item-content']}>{parse(email.text)}</Typography>
        <Typography className={style['email-list-item-date']}>{new Date(email.date).toLocaleTimeString()}</Typography>
      </CardContent>
    </Card>
  );
}
