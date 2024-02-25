import React from 'react';
import { Link } from 'react-router-dom';
import nocompany from '../../../assets/images/no-company.png';
import { Vacancy } from '../../interfaces/VacancyModel';
import { Button } from '../../shared/Button/Button';
import moment from 'moment';

interface VacancyItemDashboardProps {
  vacancy: Vacancy;
}

const VacancyItemDashboard = ({ vacancy }: VacancyItemDashboardProps) => {
  const about =
    vacancy.company?.about && vacancy.company?.about.length > 300
      ? `${vacancy.company?.about?.slice(0, 300)}...`
      : vacancy.company?.about;
  return (
    <>
      <div className="defaultpage__inner-line"></div>
      <span className="dashboard-title">
        <Link to={`/companies/${vacancy?.companyUrl}`}>
          {vacancy.company?.name}
        </Link>{' '}
        has published this vacancy {moment(vacancy?.createdAt).fromNow()}
      </span>
      <div className="dashboard__item">
        <div className="dashboard__item-title">
          <Link to={`/vacancies/${vacancy._id}`}>{vacancy.title}</Link>
          {vacancy?.salary ? (
            <h4>from {vacancy?.salary}$</h4>
          ) : (
            <h4>by agreement</h4>
          )}
        </div>
        <div className="dashboard__item-features">
          {vacancy.position && (
            <Button btnTheme="btn-small" btnColor="soft">
              {vacancy.position}
            </Button>
          )}
          {vacancy.worktype && (
            <Button btnTheme="btn-small" btnColor="soft">
              {vacancy.worktype}
            </Button>
          )}
        </div>
        <div className="dashboard__item-description">
          <p className="dashboard__item-description__text">{about}</p>
          <img
            src={vacancy.company?.avatar || nocompany}
            alt="logo-company"
            className="dashboard__item-description__img"
          />
        </div>
      </div>
    </>
  );
};
export default VacancyItemDashboard;
