import { EmailEditor } from './components/email-editor/EmailEditor';
import { EmailList } from './components/email-list/EmailList';
import styles from './Home.module.scss';
import { localStorageService } from './services/local-storage.service';

export function Home() {
  localStorageService.setUserToLocalStorage();

  return (
    <>
      <div className={styles['home-container']}>
        <EmailEditor />
        <EmailList />
      </div>
    </>
  );
}
