import React, { useCallback, useState } from 'react';
import { Loader } from '../shared/Loader/Loader';
import debounce from 'lodash/debounce';

interface UseLoaderProps {
  initialState: boolean;
  init?: boolean;
}

const useLoader = ({
  initialState = false,
  init,
}: UseLoaderProps): [() => JSX.Element, () => void, boolean] => {
  const [isLoading, setIsLoading] = useState(initialState);

  const closeLoad = useCallback(() => {
    debounce(() => {
      setIsLoading(false);
    }, 1500)();
  }, [setIsLoading]);

  const LoaderWrapper = useCallback(() => {
    return <>{isLoading && <Loader init={init} />}</>;
  }, [isLoading, init]);

  return [LoaderWrapper, closeLoad, isLoading];
};

export default useLoader;
