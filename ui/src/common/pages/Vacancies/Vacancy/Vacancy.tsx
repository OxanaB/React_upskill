import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../../../shared/Loader/Loader';
import { DefaultPageContainer } from '../../../containers/DefaultPage/DefaultPage';
import { DefaultPageLeftContainer } from '../../../containers/DefaultPage/DefaultPageLeft';
import {
  DefaultPageCenterContainer,
  PageCenterBlockContainer,
} from '../../../containers/DefaultPage/DefaultPageCenter';
import { BlockItemInfo } from '../../../shared/PageBlock/BlockItemInfo';
import { fetchVacancyAction } from '../../../redux/actions/VacancyActions';
import { useParams, useHistory } from 'react-router';
import {
  getVacancySelector,
  getVacancyStateSelector,
  addVacancyStateSelector,
} from '../../../redux/selectors/vacancySelector';
import DeleteButton from './DeleteItem/DeleteButton';
import { fetchDeleteVacancyAction } from '../../../redux/actions/OperateVacancyActions';
import { toast } from 'react-toastify';
import { getProfileSelector } from '../../../redux/selectors/profileSelector';

import './Vacancy.scss';

const Vacancy = () => {
  const { vacancyId } = useParams<{ vacancyId: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const vacancy = useSelector(getVacancySelector);
  const { me } = useSelector(getProfileSelector);
  const vacancyState = useSelector(getVacancyStateSelector);
  const [companyUrl, setCompanyUrl] = useState('');
  const { isFetching, isLoading, errorMessage } = useSelector(
    addVacancyStateSelector,
  );

  useEffect(() => {
    dispatch(fetchVacancyAction(vacancyId));
  }, [dispatch, vacancyId]);

  useEffect(() => {
    if (isFetching && !isLoading && !errorMessage && companyUrl) {
      history.push(`/companies/${companyUrl}`);
      toast.success('Your vacancy was successfully deleted!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  }, [isFetching, isLoading, errorMessage, history, companyUrl]);

  const deleteVacancy = () => {
    setCompanyUrl(vacancy.companyUrl);
    dispatch(fetchDeleteVacancyAction(vacancyId));
  };

  if (vacancyState.isLoading || isLoading) {
    return <Loader />;
  }

  return (
    <div className="vacancy">
      <div className="vacancy__inner">
        <DefaultPageContainer defaultPageTitle={vacancy?.title}>
          <DefaultPageLeftContainer leftblockName="company__inner-left">
            <BlockItemInfo name="Worktype" value={vacancy?.worktype} />
            {vacancy?.salary && (
              <BlockItemInfo name="Salary" value={`from ${vacancy.salary}$`} />
            )}
            {vacancy?.position && (
              <BlockItemInfo name="Position" value={vacancy?.position} />
            )}
            <BlockItemInfo name="Contact" value={vacancy?.email} />
            <BlockItemInfo
              isRedirect
              name="Go to the company"
              value={`/companies/${vacancy?.companyUrl}`}
            />
            {me?._id === vacancy?.author && (
              <DeleteButton del={deleteVacancy} />
            )}
          </DefaultPageLeftContainer>

          <DefaultPageCenterContainer>
            <PageCenterBlockContainer centerBlockName="userpage__inner-info">
              <div className="userpage__inner-info--main">
                <div className="userpage__inner-info--about">
                  <h3>About:</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: vacancy?.description }}
                  />
                </div>
              </div>
            </PageCenterBlockContainer>
          </DefaultPageCenterContainer>
        </DefaultPageContainer>
      </div>
    </div>
  );
};

export default Vacancy;
