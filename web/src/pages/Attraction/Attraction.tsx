import { Card, Text, Loader } from '@gravity-ui/uikit';
import { useParams } from 'react-router-dom';
import { AttractionHeader } from './components/AttractionHeader/AttractionHeader';
import { AttractionImage } from './components/AttractionImage/AttractionImage';
import { AttractionInfo } from './components/AttractionInfo/AttractionInfo';
import { AttractionDetails } from './components/AttractionDetails/AttractionDetails';
import { useGetAttractionByIdQuery } from './api/hooks';

import styles from './Attraction.module.css';

export const Attraction = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetAttractionByIdQuery(id!);
  const attraction = data?.data;

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Loader size='l' />
      </div>
    );
  }

  if (!attraction) {
    return (
      <div className={styles.container}>
        <Text variant='display-3'>Достопримечательность не найдена</Text>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Card view='raised' className={styles.card}>
        <AttractionHeader name={attraction.name} rating={attraction.rating} />

        <AttractionImage src={`http://localhost:10002/${attraction.photo}`} alt={attraction.name} />

        <AttractionInfo
          location={attraction.location}
          createAt={attraction.createAt}
          mapLink={attraction.mapLink}
        />

        <AttractionDetails
          description={attraction.description}
          latitude={attraction.latitude}
          longitude={attraction.longitude}
          status={attraction.status}
        />
      </Card>
    </div>
  );
};

export default Attraction;
