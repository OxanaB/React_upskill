import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Pagination } from '../../components/Pagination/Pagination';
import VacancyItemDashboard from '../../components/Vacancies/VacancyItemDashboard';
import { DefaultPageContainer } from '../../containers/DefaultPage/DefaultPage';
import {
  DefaultPageCenterContainer,
  PageCenterBlockContainer,
} from '../../containers/DefaultPage/DefaultPageCenter';
import { useFilter } from '../../hooks/filters/useFilter';
import { Vacancy } from '../../interfaces/VacancyModel';
import { getFollowVacanciesLoadAction } from '../../redux/actions/FollowVacancies';
import {
  getFollowVacanciesSelector,
  getFollowVacanciesInfoSelector,
} from '../../redux/selectors/vacancySelector';
import box from '../../../assets/images/box.png';
import { Loader } from '../../shared/Loader/Loader';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './Dashboard.scss';

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const vacancies = useSelector(getFollowVacanciesSelector);
  const { isLoading } = useSelector(getFollowVacanciesInfoSelector);
  const { query, page, filter } = useFilter();

  useEffect(() => {
    history.push({ search: query });
    dispatch(getFollowVacanciesLoadAction(query));
  }, [dispatch, page.currentPage, query, filter, history]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    //company__form
    <DefaultPageContainer>
      <DefaultPageCenterContainer
        centerInnerName={classNames(
          'dashboard-center',
          vacancies?.data.length === 0 && 'company__form',
        )}
      >
        <PageCenterBlockContainer centerBlockName="userpage__inner-info">
          <div className="vacancies">
            {vacancies?.data.length > 0 && (
              <div className="vacancies__filter">
                <h2>What&apos;s new?</h2>
              </div>
            )}
            <div className="dashboard">
              {vacancies &&
                vacancies.data.map((vacancy: Vacancy) => (
                  <VacancyItemDashboard
                    key={vacancy._id.toString()}
                    vacancy={vacancy}
                  />
                ))}
              {vacancies && vacancies.data && vacancies.data.length > 0 ? (
                <Pagination
                  current={parseInt(page.currentPage, 10) - 1}
                  total={vacancies.pagination.total}
                  onPageChange={page.handlePageChange}
                />
              ) : vacancies?.data.length === 0 ? (
                <div className="dashboard__sub">
                  <img src={box} alt="empty-vacancy" />
                  <h3>There are no vacancies in your dashboard.</h3>
                  <p>
                    But you can subscribe to the company with vacancies you are
                    interested in by <Link to="/companies">clicking here.</Link>
                  </p>
                </div>
              ) : (
                <p>Unfortunately, your request not found</p>
              )}
            </div>
          </div>
        </PageCenterBlockContainer>
      </DefaultPageCenterContainer>
    </DefaultPageContainer>
  );
};

export default Dashboard;
