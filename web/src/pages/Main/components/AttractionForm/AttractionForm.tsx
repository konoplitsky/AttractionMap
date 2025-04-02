import { TextInput, Text, Button } from '@gravity-ui/uikit';
import { useAttractionForm } from './hooks/useAttractionActions.ts';

import styles from './AttractionForm.module.css';

interface AttractionFormProps {
  type: TypeForm;
}

export const AttractionForm = ({ type }: AttractionFormProps) => {
  const { form, state } = useAttractionForm({ type });

  return (
    <form onSubmit={form.onSubmit} className={styles.container}>
      <Text variant='display-2'>
        {type === 'create'
          ? 'Создать достопримечательность'
          : 'Редактировать достопримечательность'}
      </Text>

      <div className={styles.fieldsBox}>
        <TextInput
          placeholder='Название'
          {...form.register('name')}
          error={form.errors.name?.message}
        />
        <TextInput
          placeholder='Описание'
          {...form.register('description')}
          error={form.errors.description?.message}
        />
      </div>

      <div className={styles.fieldsBox}>
        <TextInput
          placeholder='Рейтинг'
          type='number'
          {...form.register('rating')}
          error={form.errors.rating?.message}
        />
        <TextInput
          type='search'
          placeholder='Местоположение'
          {...form.register('location')}
          error={form.errors.location?.message}
        />
      </div>

      <div className={styles.fieldsBox}>
        <TextInput
          placeholder='Широта'
          type='number'
          {...form.register('latitude')}
          error={form.errors.latitude?.message}
        />
        <TextInput
          placeholder='Долгота'
          type='number'
          {...form.register('longitude')}
          error={form.errors.longitude?.message}
        />
      </div>

      <input type='file' {...form.register('photo')} />

      <Button view='action' type='submit' disabled={state.loading}>
        {state.loading ? 'Создание...' : 'Создать'}
      </Button>
    </form>
  );
};

export default AttractionForm;
