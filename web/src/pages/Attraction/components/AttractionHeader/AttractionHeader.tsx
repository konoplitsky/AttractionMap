import { Text, Icon } from '@gravity-ui/uikit';
import { Star } from '@gravity-ui/icons';
import styles from './AttractionHeader.module.css';

interface AttractionHeaderProps {
  name: string;
  rating: number;
}

export const AttractionHeader = ({ name, rating }: AttractionHeaderProps) => (
  <div className={styles.header}>
    <Text variant='display-3'>{name}</Text>
    <div className={styles.rating}>
      <Icon data={Star} size={20} />
      <Text variant='body-2'>{rating}</Text>
    </div>
  </div>
);
