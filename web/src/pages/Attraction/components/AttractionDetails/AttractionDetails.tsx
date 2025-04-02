import { Text } from '@gravity-ui/uikit';
import styles from './AttractionDetails.module.css';

interface AttractionDetailsProps {
  description: string;
  latitude: number;
  longitude: number;
  status: 'PLANNED' | 'VISITED';
}

export const AttractionDetails = ({
  description,
  latitude,
  longitude,
  status
}: AttractionDetailsProps) => (
  <>
    <div className={styles.description}>
      <Text variant='body-2'>{description}</Text>
    </div>

    <div className={styles.coordinates}>
      <Text variant='body-2'>
        Координаты: {latitude}, {longitude}
      </Text>
    </div>

    <div className={styles.status}>
      <Text variant='body-2'>Статус: {status === 'PLANNED' ? 'Запланировано' : 'Посещено'}</Text>
    </div>
  </>
);
