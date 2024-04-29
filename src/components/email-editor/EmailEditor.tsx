import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import { useRef, useState } from 'react';
import { useSendEmailMutation } from '../../apis/email.api';
import { FormatType } from '../../enums/format-types.enum';
import { applyFormat } from '../../helpers/email-format.helper';
import { getRandomUser } from '../../helpers/random-user.helper';
import { Email } from '../../types/email.type';
import { User } from '../../types/user.type';
import styles from './EmailEditor.module.scss';
import { useGetUsersQuery } from '../../apis/user.api';
import Button from '@mui/material/Button';

function EmailEditor() {
  const { data: users } = useGetUsersQuery('');
  const [sendEmail] = useSendEmailMutation();

  const submitEmail = () => {
    const randomUser: User | null = getRandomUser(users ?? []);

    const newEmail: Email = {
      id: new Date().getMilliseconds().toString(),
      senderId: randomUser?.id ?? '',
      text,
      date: new Date().toISOString(),
    };

    sendEmail(newEmail).then(() => setText(''));
  };

  const [text, setText] = useState<string>('Hello world, <b>how are you?</b>');
  const [selectionStart, setSelectionStart] = useState<number>(0);
  const [selectionEnd, setSelectionEnd] = useState<number>(0);

  const editorRef = useRef<HTMLTextAreaElement>(null);

  const updateSelection = () => {
    const current = editorRef.current;

    if (!current) {
      return;
    }

    const cursorStart = current.selectionStart;
    const cursorEnd = current.selectionEnd;

    setSelectionStart(cursorStart);
    setSelectionEnd(cursorEnd);
  };

  const applySelectedFormat = (format: FormatType) => {
    const selectedText = text.substring(selectionStart, selectionEnd);

    if (!selectedText) {
      return;
    }

    const textBefore = text.substring(0, selectionStart);
    const textAfter = text.substring(selectionEnd);

    setText(textBefore + applyFormat(format, selectedText) + textAfter);
  };

  return (
    <div>
      <h1>Email editor</h1>
      <div className={styles.card}>
        <textarea
          ref={editorRef}
          onSelect={updateSelection}
          className={styles['card-editor']}
          value={text}
          onChange={(event) => setText(event.target.value)}
        >
          {text}
        </textarea>

        <div className={styles['card-actions']}>
          <div className={styles['card-actions-tools']}>
            <Button onClick={() => setText('')}>
              <Eraser size={16} />
            </Button>

            <Button onClick={() => applySelectedFormat(FormatType.Bold)}>
              <Bold size={16} />
            </Button>

            <Button onClick={() => applySelectedFormat(FormatType.Italic)}>
              <Italic size={16} />
            </Button>

            <Button onClick={() => applySelectedFormat(FormatType.Underline)}>
              <Underline size={16} />
            </Button>
          </div>

          <Button className={styles['card-actions-submit']} disabled={!text} onClick={() => submitEmail()}>
            Send now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EmailEditor;
