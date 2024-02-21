import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Select from 'react-select';
import { Pagination } from '../../../components/Pagination/Pagination';
import { sortByDate } from '../../../constants/sortConsts';
import { customStyles } from '../../../constants/userConsts';
import { useFilter } from '../../../hooks/filters/useFilter';
import { Company } from '../../../interfaces/CompanyModel';
import { getCompaniesLoadAction } from '../../../redux/actions/CompaniesActions';
import {
  companiesStateSelector,
  companiesStatusSelector,
} from '../../../redux/selectors/companySelector';
import Icon from '../../../shared/Icon/Icon';
import { Loader } from '../../../shared/Loader/Loader';
import classNames from 'classnames';
import Slider from 'rc-slider';
import { CompanyItem } from './CompanyItem';
import useFilterItem from '../../../hooks/filters/useFilterItem';
import InputField from '../../../shared/Input/InputField';
import { Button } from '../../../shared/Button/Button';

import './CompaniesList.scss';
import { InformationToolTip } from '../../../components/ToolTips/InformationToolTip';

const CompaniesList = () => {
  const { Range } = Slider;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isApplyClicked, setIsApplyClicked] = useState(false);
  const [FilterStaff, isStaffVisible] = useFilterItem(false, 'Number of staff');
  const {
    query,
    page,
    filter,
    handleSortDateChange,
    followers,
    leftStaff,
    rightStaff,
  } = useFilter(isApplyClicked, isStaffVisible, false, 'COMPANIES');

  const handleApplyClick = () => {
    setIsApplyClicked(!isApplyClicked);
  };

  const { isLoading } = useSelector(companiesStatusSelector);

  const companies = useSelector(companiesStateSelector);

  useEffect(() => {
    history.push({ search: query });
    dispatch(getCompaniesLoadAction(query));
  }, [page.currentPage, query, filter, history, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  const handleStaffChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (index) {
      rightStaff.setRightStaff(parseInt(event.target.value, 10));
    } else leftStaff.setLeftStaff(parseInt(event.target.value, 10));
  };

  const handleSortFollowers = (sortBy: number) => () => {
    followers.setFollowers(sortBy);
  };

  return (
    <>
      <div className="defaultpage">
        <div className="container">
          <div className="defaultpage__inner">
            <div className="defaultpage__inner-left">
              <div className="defaultpage__inner-block defaultpage__leftblock">
                <div className="companies__leftfilter">
                  <InformationToolTip desc="Collapse filter item to reset" />
                  <FilterStaff>
                    <div className="filter__item-content--salary">
                      <InputField
                        type="number"
                        value={leftStaff.value}
                        onChange={e => handleStaffChange(e, 0)}
                      />
                      -
                      <InputField
                        type="number"
                        value={rightStaff.value}
                        onChange={e => handleStaffChange(e, 1)}
                      />
                    </div>
                    <Range
                      max={1000}
                      min={0}
                      allowCross={false}
                      value={[leftStaff.value, rightStaff.value]}
                      onChange={value => {
                        leftStaff.setLeftStaff(value[0]);
                        rightStaff.setRightStaff(value[1]);
                      }}
                    />
                  </FilterStaff>
                  <div className="userpage__leftblock-buttons">
                    <Button onClick={handleApplyClick} btnTheme="btn-small">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="defaultpage__inner-center">
              <div className="defaultpage__inner-block">
                <div className="users">
                  <div className="users__filter">
                    <h3>
                      Found {companies?.count}
                      {companies?.count > 1 ? ` companies` : ` company`}
                    </h3>
                    <div className="companies__filter-item">
                      <span
                        className={classNames(
                          'companies__filter-item--text',
                          followers.value !== 0 && 'active',
                        )}
                        onClick={handleSortFollowers(0)}
                      >
                        Followers
                      </span>
                      <div className="companies__filter-item--icons">
                        <Icon
                          iconName={classNames(
                            'icon-filterup',
                            followers.value === -1 && 'active',
                          )}
                          onClick={handleSortFollowers(-1)}
                        />
                        <Icon
                          iconName={classNames(
                            'icon-filterup rotate',
                            followers.value === 1 && 'active',
                          )}
                          onClick={handleSortFollowers(1)}
                        />
                      </div>
                    </div>
                    <Select
                      autosize={true}
                      styles={customStyles}
                      options={sortByDate}
                      onChange={handleSortDateChange}
                      defaultValue={filter}
                      value={filter}
                    />
                  </div>
                  <div className="defaultpage__inner-line"></div>
                  <div className="companies">
                    {companies &&
                      companies.data.map((company: Company) => (
                        <CompanyItem
                          key={company._id.toString()}
                          company={company}
                          filter={filter}
                        />
                      ))}
                    {companies &&
                    companies.data &&
                    companies.data.length > 0 ? (
                      <Pagination
                        current={parseInt(page.currentPage, 10) - 1}
                        total={companies.pagination.total}
                        onPageChange={page.handlePageChange}
                      />
                    ) : (
                      <p>Unfortunately, your request not found</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompaniesList;
