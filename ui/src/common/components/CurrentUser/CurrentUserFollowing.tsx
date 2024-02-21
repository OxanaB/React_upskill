import React from 'react';
import { Link } from 'react-router-dom';
import { Company } from '../../interfaces/CompanyModel';
import nocompany from '../../../assets/images/no-company.png';

interface CurrentUserFollowingProps {
  following: Array<Company> | null;
}

export const CurrentUserFollowing = ({
  following,
}: CurrentUserFollowingProps) => (
  <>
    {following &&
      following.map((company: Company) => (
        <Link
          to={`/companies/${company.companyUrl}`}
          className="userpage__leftblock-responses--item"
          key={company._id.toString()}
        >
          <div className="userpage__leftblock-responses--img">
            <div
              className="userpage__inner-company"
              style={{ backgroundImage: `url(${company.avatar || nocompany})` }}
            ></div>
          </div>
          <span>{company.name}</span>
        </Link>
      ))}
  </>
);
