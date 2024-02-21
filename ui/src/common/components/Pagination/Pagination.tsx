import React from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export const Pagination = ({
  total,
  current,
  onPageChange,
}: PaginationProps) => (
  <ReactPaginate
    previousLabel={'<'}
    nextLabel={'>'}
    breakLabel={'...'}
    marginPagesDisplayed={1}
    pageRangeDisplayed={1}
    forcePage={current}
    pageCount={total}
    onPageChange={onPageChange}
    containerClassName={'pagination'}
    previousLinkClassName={'pagination__link'}
    nextLinkClassName={'pagination__link'}
    disabledClassName={'pagination__link--disabled'}
    disableInitialCallback={true}
    activeClassName={'pagination__link--active'}
  />
);
