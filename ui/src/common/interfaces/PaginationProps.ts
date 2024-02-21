import { DefaultStateProps } from './StateProps';

export interface PaginationProps extends DefaultStateProps {
  count: number;
  pagination: {
    count: number;
    total: number;
  };
}
