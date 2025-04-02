import { Loader, Text } from '@gravity-ui/uikit';
import { AttractionsTable } from './components/AttractionTable/AttractionsTable.tsx';
import { ModalsContainer } from './components/ModalsContainer/ModalsContainer.tsx';
import { Info } from './components/Info/Info.tsx';
import { normalizeAttractions } from './lib/normalizeAttractions.ts';
import { useGetAttractionsRequest } from './api/hooks';
import { Providers } from './providers.tsx';

import styles from './Main.module.css';

export const Main = () => {
  const getAttractionsQuery = useGetAttractionsRequest();
  const attractions = normalizeAttractions(getAttractionsQuery.data?.data);

  if (getAttractionsQuery.isLoading) {
    return (
      <div className={styles.container}>
        <Loader size='l' />
      </div>
    );
  }

  return (
    <Providers>
      <div className={styles.container}>
        <Text variant='display-3'>Достопримечательности</Text>
        <Info />
        <AttractionsTable attractions={attractions} />
        <ModalsContainer />
      </div>
    </Providers>
  );
};

export default Main;
