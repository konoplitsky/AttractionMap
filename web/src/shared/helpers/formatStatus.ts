export const formatStatus = (status: 'PLANNED' | 'VISITED'): string => {
  switch (status) {
    case 'PLANNED':
      return 'В планах';
    case 'VISITED':
      return 'Осмотрена';
    default:
      return status;
  }
};
