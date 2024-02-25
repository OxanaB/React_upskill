import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  delCompanyAction,
  fetchCompanyAction,
  fetchFollowCompanyAction,
} from '../../../redux/actions/GetCompanyActions';
import {
  getCompanySelector,
  getCompanyStateSelector,
  isFollowSelector,
  companiesVacanciesSelector,
} from '../../../redux/selectors/companySelector';
import { Loader } from '../../../shared/Loader/Loader';
import { VacancyCompanyItem } from './VacancyCompanyItem';
import { Vacancy } from '../../../interfaces/VacancyModel';
import { DefaultPageContainer } from '../../../containers/DefaultPage/DefaultPage';
import { DefaultPageLeftContainer } from '../../../containers/DefaultPage/DefaultPageLeft';
import {
  DefaultPageCenterContainer,
  PageCenterBlockContainer,
} from '../../../containers/DefaultPage/DefaultPageCenter';
import { CompanyTitle } from './CompanyTitle';
import { BlockItemInfo } from '../../../shared/PageBlock/BlockItemInfo';
import { Link } from 'react-router-dom';
import { getProfileSelector } from '../../../redux/selectors/profileSelector';
import { NotFoundData } from './NotFoundData/NotFoundData';

import './Company.scss';

const Company = () => {
  const dispatch = useDispatch();
  const { companyUrl } = useParams<{ companyUrl: string }>();
  const { me } = useSelector(getProfileSelector);
  const company = useSelector(getCompanySelector);
  const vacancies = useSelector(companiesVacanciesSelector);
  const isFollow = useSelector(isFollowSelector);
  const { isLoading, isFetching } = useSelector(getCompanyStateSelector);
  useEffect(() => {
    dispatch(fetchCompanyAction(companyUrl));
    return () => {
      dispatch(delCompanyAction());
    };
  }, [companyUrl, dispatch]);

  if (isLoading && !isFetching) {
    return <Loader />;
  }

  const handleSubscribe = () => dispatch(fetchFollowCompanyAction(companyUrl));

  return (
    <div className="company">
      <CompanyTitle
        company={company}
        isFollow={isFollow}
        onSubscribe={handleSubscribe}
      />
      <div className="company__inner">
        <DefaultPageContainer>
          <DefaultPageLeftContainer leftblockName="company__inner-left">
            <div className="company__info">
              <BlockItemInfo
                name="Followers"
                value={company?.followers.length}
              />
              {company?.year && (
                <BlockItemInfo name="Foundation year" value={company?.year} />
              )}
              {company?.staff && (
                <BlockItemInfo
                  name="Number of staff"
                  value={`${company?.staff}+`}
                />
              )}
              <BlockItemInfo name="Address" value={company?.address} />
              <BlockItemInfo isLink name="Website" value={company?.website} />
            </div>
          </DefaultPageLeftContainer>

          <DefaultPageCenterContainer>
            <PageCenterBlockContainer centerBlockName="userpage__inner-info">
              <div className="userpage__inner-info--main">
                <div className="userpage__inner-info--about">
                  <h3>About:</h3>
                  <p>{company?.about}</p>
                </div>
              </div>
            </PageCenterBlockContainer>
            <PageCenterBlockContainer centerBlockName="userpage__inner-info">
              <div className="userpage__inner-info--main">
                <div className="userpage__inner-info--about">
                  <div className="company__vacancies-title">
                    <h3>Vacancies:</h3>
                    {me?._id === company?.author && (
                      <Link
                        className="btn btn-small primary"
                        to={`/companies/${company.companyUrl}/add-vacancy`}
                      >
                        Add vacancy
                      </Link>
                    )}
                  </div>
                  <div className="defaultpage__inner-line"></div>
                  <div className="company__vacancies">
                    {vacancies && vacancies.length ? (
                      vacancies.map((vacancy: Vacancy) => (
                        <VacancyCompanyItem
                          key={vacancy._id}
                          vacancy={vacancy}
                          name={company.name}
                          avatar={company.avatar}
                        />
                      ))
                    ) : (
                      <NotFoundData />
                    )}
                  </div>
                </div>
              </div>
            </PageCenterBlockContainer>
          </DefaultPageCenterContainer>
        </DefaultPageContainer>
      </div>
    </div>
  );
};

export default Company;
