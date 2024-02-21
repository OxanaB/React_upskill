import React from 'react';
import { Link } from 'react-router-dom';
import features from '../../../assets/images/features.png';
import './Features.scss';

const Features = () => (
  <div className="features">
    <div className="features__content">
      <h1>
        Job search has become much easier with <span>OmegaWORK</span>
      </h1>
      <p>
        Provide employers searching for all your needs with ease and speed using
        OmegaWORK discover interesting features from us. Every day, we help
        hundreds of thousands of people to make a difference in their lives.
      </p>
      <ul className="features__content-menu">
        <li className="features__content-item">
          Publishing your company vacancies
        </li>
        <li className="features__content-item">
          Subscription to interesting companies
        </li>
        <li className="features__content-item">
          Convenient conditions for employers and applicants
        </li>
      </ul>
      <Link className="btn primary" to="/sign-up">
        Get started
      </Link>
    </div>
    <img src={features} alt="our-features" className="features__img" />
  </div>
);

export default Features;
