import React from 'react';
import { Link } from 'react-router-dom';
import nocompany from '../../../../assets/images/no-company.png';
import { Company } from '../../../interfaces/CompanyModel';
import moment from 'moment';

interface CompanyItemProps {
  company: Company;
  filter?: {
    label: string;
    value: string;
  };
}

export const CompanyItem = ({ company, filter }: CompanyItemProps) => (
  <>
    <div className="companies__item">
      <div className="companies__item-img">
        <img src={company.avatar || nocompany} alt="company-itempic" />
      </div>
      <div className="companies__item-main">
        <Link
          className="companies__item-main--text"
          to={`/companies/${company.companyUrl}`}
        >
          {company.name}
        </Link>
        <span className="companies__item-main--followers">
          {` - ${company.followers.length} followers`}
        </span>
        <div className="companies__item-main--desc">
          <p>{company.description}</p>
        </div>
        <div className="companies__item-main">
          <ul className="companies__item-features">
            {company.address && (
              <li className="companies__item-features--item">
                {company.address}
              </li>
            )}
            {company.staff && (
              <li className="companies__item-features--item">
                {company.staff}+ Employees
              </li>
            )}
          </ul>
          <span className="companies__item-main--date">
            {filter?.value === '-createdAt'
              ? moment(company.createdAt).format('D MMM')
              : moment(company.updatedAt).format('D MMM')}
          </span>
        </div>
      </div>
    </div>
    <div className="defaultpage__inner-line"></div>
  </>
);
