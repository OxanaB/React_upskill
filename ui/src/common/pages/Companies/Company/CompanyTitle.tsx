import React from 'react';
import { Company } from '../../../interfaces/CompanyModel';
import { Button } from '../../../shared/Button/Button';
import nocompany from '../../../assets/images/no-company.png';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCompanyStateSelector } from '../../../redux/selectors/companySelector';

interface CompanyTitleProps {
  company: Company;
  isFollow: boolean;
  onSubscribe: () => void;
}

export const CompanyTitle = ({
  company,
  isFollow,
  onSubscribe,
}: CompanyTitleProps) => {
  const history = useHistory();
  const handleReturn = () => history.goBack();
  const { isFollowLoad, isLoading } = useSelector(getCompanyStateSelector);
  return (
    <div style={{ background: company?.background }} className="company__main">
      <div className="container">
        <div
          style={{ background: company?.background }}
          className="company__main company__wrapper"
        >
          <div className="company__main-text">
            <div
              onClick={handleReturn}
              className="company__main-text--return"
            >{`<`}</div>
            <h1 className="company__main-text--title">{company?.name}</h1>
            {company?.description && (
              <h2 className="company__main-text--subtitle">
                {company?.description}
              </h2>
            )}
            <Button
              btnTheme="btn-small"
              btnColor={isFollow ? 'soft subcribe' : 'ghost'}
              onClick={onSubscribe}
            >
              {isFollowLoad || isLoading
                ? 'Loading...'
                : isFollow
                ? 'Subscribed'
                : 'Follow'}
            </Button>
          </div>
          <div className="company__main-logo">
            <img src={company?.avatar || nocompany} alt="logo-company" />
          </div>
        </div>
      </div>
    </div>
  );
};
