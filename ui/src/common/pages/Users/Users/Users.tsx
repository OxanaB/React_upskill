import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import useFilterItem from '../../../hooks/filters/useFilterItem';
import { User } from '../../../interfaces/UserModel';
import { getUsersLoadAction } from '../../../redux/actions/UsersActions';
import {
  getUsersInfoSelector,
  getUsersSelector,
} from '../../../redux/selectors/usersSelector';
import { Loader } from '../../../shared/Loader/Loader';
import { UserItem } from './UserItem';
import { Pagination } from '../../../shared/Pagination/Pagination';
import { useFilter } from '../../../hooks/filters/useFilter';
import { customStyles } from '../../../constants/userConsts';
import { sortByDate } from '../../../constants/sortConsts';
import { useHistory } from 'react-router';
import UserFilter from '../../../components/Users/UserFilter';

import './Users.scss';
import { InformationToolTip } from '../../../shared/ToolTips/InformationToolTip';

const Users = () => {
  const history = useHistory();
  const [isApplyClicked, setIsApplyClicked] = useState(false);
  const [FilterPosition, isPositionVisible] = useFilterItem(true, 'Position');
  const [FilterSalary, isSalaryVisible] = useFilterItem(false, 'Salary ($)');
  const {
    query,
    page,
    filter,
    handleSortDateChange,
    position,
    minSalary,
    maxSalary,
  } = useFilter(isApplyClicked, isSalaryVisible, isPositionVisible, 'STANDARD');
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);
  const { isLoading } = useSelector(getUsersInfoSelector);

  useEffect(() => {
    history.push({ search: query });
    dispatch(getUsersLoadAction(query));
  }, [dispatch, page.currentPage, query, filter, history, isApplyClicked]);

  const handleApplyClick = () => {
    setIsApplyClicked(!isApplyClicked);
  };

  const handleSalaryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (index) {
      maxSalary.setMaxSalary(parseInt(event.target.value, 10));
    } else minSalary.setMinSalary(parseInt(event.target.value, 10));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="defaultpage">
        <div className="container">
          <div className="defaultpage__inner">
            <div className="defaultpage__inner-left">
              <div className="defaultpage__inner-block defaultpage__leftblock">
                <InformationToolTip desc="Collapse filter item to reset" />
                <UserFilter
                  position={position}
                  isVisible={isPositionVisible}
                  minSalary={minSalary}
                  maxSalary={maxSalary}
                  handleApplyClick={handleApplyClick}
                  handleSalaryChange={handleSalaryChange}
                  FilterPosition={FilterPosition}
                  FilterSalary={FilterSalary}
                />
              </div>
            </div>
            <div className="defaultpage__inner-center">
              <div className="defaultpage__inner-block">
                <div className="users">
                  <div className="users__filter">
                    <h2>Workers</h2>
                    <Select
                      autosize={true}
                      placeholder={'Sort by date'}
                      styles={customStyles}
                      onChange={handleSortDateChange}
                      defaultValue={filter}
                      value={filter}
                      options={sortByDate}
                    />
                  </div>
                  {users &&
                    users.data.map((user: User, i: number) => (
                      <UserItem key={i} user={user} filter={filter} />
                    ))}
                  {users && users.data && users.data.length > 0 ? (
                    <Pagination
                      current={parseInt(page.currentPage, 10) - 1}
                      total={users.pagination.total}
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
    </>
  );
};

export default Users;
