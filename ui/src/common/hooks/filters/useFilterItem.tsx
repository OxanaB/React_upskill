import React, { useCallback, useState } from 'react';
import FilterItem from '../../shared/FilterItem/FilterItem';

interface FilterItemProps {
  children: React.ReactNode;
  name?: string;
}

const useFilterItem = (
  initialState: boolean,
  name: string,
): [({ children }: FilterItemProps) => JSX.Element, boolean] => {
  const [isVisible, setIsVisible] = useState(initialState);

  const toggleFilter = useCallback(() => {
    setIsVisible(!isVisible);
  }, [setIsVisible, isVisible]);

  const FilterItemWrapper = useCallback(
    ({ children }: FilterItemProps): JSX.Element => {
      return (
        <>
          <FilterItem
            name={name}
            isVisible={isVisible}
            toggleFilter={toggleFilter}
          >
            {isVisible && <>{children}</>}
          </FilterItem>
        </>
      );
    },
    [isVisible, name, toggleFilter],
  );

  return [FilterItemWrapper, isVisible];
};

export default useFilterItem;
