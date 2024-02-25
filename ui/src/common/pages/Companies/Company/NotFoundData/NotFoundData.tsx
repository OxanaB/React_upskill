import React from 'react';
import broke from '../../../assets/images/broke.png';
import './NotFoundData.scss';

export const NotFoundData = () => (
  <div className="empty-data">
    <img src={broke} alt="" />
    <h4 className="empty-data__title">There is no vacancies here</h4>
  </div>
);
