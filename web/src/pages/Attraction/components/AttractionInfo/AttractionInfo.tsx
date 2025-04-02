import { Text, Button, Icon } from '@gravity-ui/uikit';
import { MapPin, Calendar, Link } from '@gravity-ui/icons';
import styles from './AttractionInfo.module.css';

interface AttractionInfoProps {
  location: string;
  createAt: string;
  mapLink: string;
}

export const AttractionInfo = ({ location, createAt, mapLink }: AttractionInfoProps) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoItem}>
        <Icon data={MapPin} size={20} />
        <Text variant="body-2">{location}</Text>
      </div>

      <div className={styles.infoItem}>
        <Icon data={Calendar} size={20} />
        <Text variant="body-2">
          {new Date(createAt).toLocaleDateString('ru-RU')}
        </Text>
      </div>

      <div className={styles.infoItem}>
        <Icon data={Link} size={20} />
        <Button view="flat" href={mapLink} target="_blank">
          Открыть на карте
        </Button>
      </div>
    </div>
  );
}; 