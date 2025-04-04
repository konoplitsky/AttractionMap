import { useQueryClient } from '@tanstack/react-query';
import { TableActionConfig, TableDataItem } from '@gravity-ui/uikit';
import { useDeleteAttractionMutation } from '../../../api/hooks';
import { useModal } from '../../../contexts/modal';
import { useAttractionId } from '@/pages/Main/contexts/attractionId';

export const useActionsTable = () => {
  const { openUpdateModal } = useModal();
  const { setAttractionId } = useAttractionId();

  const queryClient = useQueryClient();
  const deleteAction = useDeleteAttractionMutation();

  const handleDelete = async (item: TableDataItem) => {
    const attraction = item as Attraction;
    await deleteAction.mutateAsync(attraction.id);
    queryClient.invalidateQueries({ queryKey: ['getAttractions'] });
  };

  const handleUpdate = (item: TableDataItem) => {
    const attraction = item as Attraction;
    setAttractionId(attraction.id);
    openUpdateModal();
  };

  const getRowActions = (
    item: TableDataItem,
    _index: number
  ): TableActionConfig<TableDataItem>[] => {
    return [
      {
        text: 'Редактировать',
        handler: () => handleUpdate(item),
        theme: 'normal'
      },
      {
        text: 'Удалить',
        handler: () => handleDelete(item),
        theme: 'danger'
      }
    ];
  };

  return {
    getRowActions
  };
};
