import { useCallback, useEffect, useState } from 'react';
import * as qs from 'query-string';
import { ValueType } from 'react-select';
import { useLocation } from 'react-router';

export const useFilter = (
  isApplyClicked?: boolean,
  isVisible?: boolean,
  isPositionVisible?: boolean,
  type?: string,
) => {
  const location = useLocation();
  const queries = qs.parse(location.search);
  const [currentPage, setCurrentPage] = useState<string>(
    queries?.page?.toString() || '1',
  );
  const [filter, setFilter] = useState({
    value: '-createdAt',
    label: 'Created date',
  });
  const [minSalary, setMinSalary] = useState<number>(
    parseInt(queries?.salary?.toString().split(',')[0] ?? '', 10) || 0,
  );
  const [maxSalary, setMaxSalary] = useState<number>(
    parseInt(queries?.salary?.toString().split(',')[1] ?? '', 10) || 300,
  );
  const [leftStaff, setLeftStaff] = useState<number>(
    parseInt(queries?.staff?.toString().split(',')[0] ?? '', 10) || 0,
  );
  const [rightStaff, setRightStaff] = useState<number>(
    parseInt(queries?.staff?.toString().split(',')[1] ?? '', 10) || 200,
  );
  const posArr: any = [];
  queries?.position
    ?.toString()
    .split(',')
    .map(pos => {
      posArr.push({ position: pos });
      return { position: pos };
    });
  const [position, setPosition] = useState<Array<{ position: string }>>(
    posArr?.length ? posArr : [],
  );
  const [query, setQuery] = useState(
    `?sort=${filter.value}&page=${currentPage}`,
  );

  const [followers, setFollowers] = useState(0);

  const transformPosition = useCallback(() => {
    let resultPosition = '';
    position.map((obj, i) => {
      resultPosition +=
        i !== position.length && i !== 0 ? `,${obj.position}` : obj.position;
      return obj;
    });
    return resultPosition;
  }, [position]);

  const handlePageChange = (selectedItem: { selected: number }) => {
    const currentPage = selectedItem.selected + 1;
    setCurrentPage(currentPage.toString());
  };

  const handleSortDateChange = (event: ValueType<any, any>) => {
    setFilter(event);
  };

  const newPosition = (pos: string) => () => {
    if (isChanged(pos)) {
      setPosition(prevState => prevState.filter(prev => prev.position !== pos));
    } else {
      setPosition(prevState => [...prevState, { position: pos }]);
    }
  };

  const isChanged = (data: string) => {
    return position.find(obj => obj.position === data) ? true : false;
  };

  useEffect(() => {
    if (position.length && isVisible) {
      setCurrentPage('1');
    }
    if (!isPositionVisible) {
      setPosition([]);
    }
    switch (type) {
      case 'STANDARD': {
        setQuery(
          !position.length
            ? `?sort=${filter.value}&page=${currentPage}${
                isVisible || queries.salary
                  ? `&salary=${minSalary},${maxSalary}`
                  : ''
              }`
            : `?sort=${filter.value}&page=1${
                isPositionVisible ? `&position=${transformPosition()}` : ''
              }${
                isVisible || queries.salary
                  ? `&salary=${minSalary},${maxSalary}`
                  : ''
              }`,
        );
        break;
      }
      case 'COMPANIES': {
        if (followers !== 0) {
          setQuery(
            `?sort=${filter.value}&page=${currentPage}&followers=${followers}${
              isVisible ? `&staff=${leftStaff},${rightStaff}` : ''
            }`,
          );
        } else
          setQuery(
            `?sort=${filter.value}&page=${currentPage}${
              isVisible ? `&staff=${leftStaff},${rightStaff}` : ''
            }`,
          );
        break;
      }
    }
  }, [
    currentPage,
    filter,
    isApplyClicked,
    followers,
    isPositionVisible,
    isVisible,
    leftStaff,
    maxSalary,
    minSalary,
    position.length,
    queries.salary,
    rightStaff,
    transformPosition,
    type,
  ]);

  return {
    query,
    page: {
      currentPage,
      handlePageChange,
    },
    handleSortDateChange,
    filter,
    setFilter,
    position: { value: position, newPosition, isChanged },
    minSalary: { value: minSalary, setMinSalary },
    maxSalary: { value: maxSalary, setMaxSalary },
    followers: { value: followers, setFollowers },
    leftStaff: { value: leftStaff, setLeftStaff },
    rightStaff: { value: rightStaff, setRightStaff },
  };
};
