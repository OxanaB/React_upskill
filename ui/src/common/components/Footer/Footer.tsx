import React, { useMemo } from 'react';
import './Footer.scss';

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <ul className="footer__inner-social">
              <li className="footer__inner-social--item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://facebook.com/DataArt.Dev/"
                >
                  <span className="footer__inner-social--icon icon-fb"></span>
                </a>
              </li>
              <li className="footer__inner-social--item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://linkedin.com/company/dataart"
                >
                  <span className="footer__inner-social--icon icon-ld"></span>
                </a>
              </li>
              <li className="footer__inner-social--item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://instagram.com/dataart"
                >
                  <span className="footer__inner-social--icon icon-im"></span>
                </a>
              </li>
            </ul>
            <div className="footer__inner-copyright">
              &copy; {currentYear} - All right Licensed
            </div>
            <div className="footer__inner-warn">For commercial inquiries</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
