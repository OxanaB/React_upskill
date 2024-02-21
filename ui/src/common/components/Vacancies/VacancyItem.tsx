import React from 'react';
import { Link } from 'react-router-dom';
import { Vacancy } from '../../interfaces/VacancyModel';
import moment from 'moment';

interface VacancyItemProps {
  vacancy: Vacancy | null;
  filter?: {
    label: string;
    value: string;
  };
}

export const VacancyItem = ({ vacancy, filter }: VacancyItemProps) => (
  <>
    <div className="defaultpage__inner-line"></div>
    <div className="vacancies__item">
      <div className="vacancies__item-title">
        <Link to={`/vacancies/${vacancy?._id}`}>{vacancy?.title}</Link>
        {vacancy?.salary ? (
          <h4>from {vacancy?.salary}$</h4>
        ) : (
          <h4>by agreement</h4>
        )}
      </div>
      <ul className="companies__item-features">
        <li className="companies__item-features--item">{vacancy?.worktype}</li>
        {vacancy?.position && (
          <li className="companies__item-features--item">
            {vacancy?.position}
          </li>
        )}
        <li className="companies__item-features--item">
          <Link to={`/companies/${vacancy?.companyUrl}`}>
            {vacancy?.company?.name}
          </Link>
        </li>
        <li className="companies__item-features--item">
          {vacancy?.company?.address}
        </li>
      </ul>
      <p className="vacancies__item-date">
        {filter?.value === '-createdAt'
          ? moment(vacancy?.createdAt).format('D MMM')
          : moment(vacancy?.updatedAt).format('D MMM')}
      </p>
    </div>
  </>
);
