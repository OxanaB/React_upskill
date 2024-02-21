import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProfileAction } from '../../redux/actions/ProfileActions';
import useLoader from '../../hooks/useLoader';

interface InitAppProps {
  children: React.ReactNode | React.ReactNode[];
}

const InitApp = ({ children }: InitAppProps) => {
  const dispatch = useDispatch();
  const [LoaderWrapper, closeLoad, isLoading] = useLoader({
    initialState: true,
    init: true,
  });

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchProfileAction());
      closeLoad();
    }
  }, [isLoading, closeLoad, dispatch]);
  return <>{isLoading ? <LoaderWrapper /> : <>{children}</>}</>;
};

export default InitApp;
