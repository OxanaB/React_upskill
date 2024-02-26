import React from 'react';
import { Vacancy } from '../../../interfaces/VacancyModel';
import { Link } from 'react-router-dom';
import nocompany from '../../../assets/images/no-company.png';
import { Button } from '../../../shared/Button/Button';
import moment from 'moment';

interface VacancyCompanyItem {
  vacancy: Vacancy;
  avatar: string;
  name: string;
}

export const VacancyCompanyItem = ({
  vacancy,
  name,
  avatar,
}: VacancyCompanyItem) => {
  return (
    <div className="company__vacancies-item">
      <div className="company__vacancies-item--img">
        <img src={avatar || nocompany} alt="logo-company" />
      </div>
      <div className="company__vacancies-item--text">
        <div className="company__vacancies-title">
          <span>{name}</span>
          <span>{moment(vacancy.createdAt).format('DD MMMM')}</span>
        </div>
        <Link to={`/vacancies/${vacancy._id}`}>{vacancy.title}</Link>
        <div>
          {vacancy.worktype && (
            <Button btnTheme="btn-small" btnColor="soft">
              {vacancy.worktype}
            </Button>
          )}
          {vacancy.position && (
            <Button btnTheme="btn-small" btnColor="soft">
              {vacancy.position}
            </Button>
          )}
          {vacancy.salary && (
            <Button btnTheme="btn-small" btnColor="soft">
              {`from ${vacancy.salary}$`}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
