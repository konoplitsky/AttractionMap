import { Button } from '@gravity-ui/uikit';
import { ButtonsContainer } from '../ButtonsContainer/ButtonsContainer.tsx';
import { useRole } from '../../contexts/role';
import { typeRole } from '../../lib/const.ts';
import { useModal } from '../../contexts/modal';

import styles from './Info.module.css';

export const Info = () => {
  const { role } = useRole();
  const { openModal } = useModal();

  return (
    <div className={styles.container}>
      <ButtonsContainer />
      {role === typeRole.admin && (
        <Button onClick={openModal} view='action' size='l'>
          Создать достопримечательность
        </Button>
      )}
    </div>
  );
};
