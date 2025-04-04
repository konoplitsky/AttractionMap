import styles from '@/pages/Main/Main.module.css';
import { Button } from '@gravity-ui/uikit';
import { useRole } from '../../contexts/role';
import { typeRole } from '../../lib/const.ts';

export const ButtonsContainer = () => {
  const { role, toggleRole } = useRole();

  return (
    <div className={styles.buttons_container}>
      <Button
        size='l'
        view={role === typeRole.user ? 'action' : 'outlined-action'}
        onClick={() => role === typeRole.admin && toggleRole()}
      >
        Пользователь
      </Button>
      <Button
        size='l'
        view={role === typeRole.admin ? 'action' : 'outlined-action'}
        onClick={() => role === typeRole.user && toggleRole()}
      >
        Админ
      </Button>
    </div>
  );
};
