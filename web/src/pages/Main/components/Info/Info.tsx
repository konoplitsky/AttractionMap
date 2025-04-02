import { Button } from '@gravity-ui/uikit';
import { ButtonsContainer } from '../ButtonsContainer/ButtonsContainer.tsx';
import { useRole } from '../../context/role';
import { typeRole } from '../../lib/const.ts';
import { useModal } from '../../context/modal';

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
