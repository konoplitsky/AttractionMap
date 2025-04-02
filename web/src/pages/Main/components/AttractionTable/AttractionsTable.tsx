import {
  Table,
  TableColumnConfig,
  TableDataItem,
  withTableActions,
  withTableSelection
} from '@gravity-ui/uikit';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRole } from '../../context/role';
import { useActionsTable } from './hooks/useActionsTable.ts';
import { typeRole } from '@/pages/Main/lib/const.ts';

import styles from './AttractionsTable.module.css';

const WIDTH_COLUMN = 130;

interface AttractionsTableProps {
  attractions: Attraction[];
}

const MyTable = withTableSelection(Table);
const NewTable = withTableActions(MyTable);

export const AttractionsTable = ({ attractions }: AttractionsTableProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { role } = useRole();
  const { getRowActions } = useActionsTable();
  const navigate = useNavigate();

  const columns: TableColumnConfig<TableDataItem>[] = [
    {
      id: 'name',
      name: 'Название',
      template: (item: TableDataItem) => item.name as Attraction['name'],
      width: WIDTH_COLUMN
    },
    {
      id: 'createAt',
      name: 'Дата создания',
      template: (item: TableDataItem) => item.createAt as Attraction['createAt'],
      width: WIDTH_COLUMN
    },
    {
      id: 'rating',
      name: 'Рейтинг',
      template: (item: TableDataItem) => item.rating as Attraction['rating'],
      width: WIDTH_COLUMN
    },
    {
      id: 'location',
      name: 'Местоположение',
      template: (item: TableDataItem) => item.location as Attraction['location'],
      width: WIDTH_COLUMN
    },
    {
      id: 'map',
      name: 'Карта',
      template: (item: TableDataItem) => {
        const attraction = item as Attraction;
        return (
          <Link to={attraction.mapLink} target='_blank'>
            Открыть на карте
          </Link>
        );
      },
      width: WIDTH_COLUMN
    },
    {
      id: 'status',
      name: 'Статус',
      template: (item: TableDataItem) => item.status as Attraction['status'],
      width: 100
    }
  ];

  const TableComponent = role === typeRole.admin ? NewTable : MyTable;

  return (
    <div className={styles.tableContainer}>
      <TableComponent
        data={attractions}
        columns={columns}
        emptyMessage='Нет доступных достопримечательностей'
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        getRowActions={typeRole.admin ? getRowActions : undefined}
        width='max'
        className={styles.table}
        onRowClick={(item) => {
          const attraction = item as Attraction;
          navigate(attraction.id);
        }}
      />
    </div>
  );
};
