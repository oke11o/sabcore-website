import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * Site footer containing navigation links and copyright notice.  We
 * repeat key links here for convenience and to emphasise the call to
 * action.  Additional social media icons could be added easily.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__nav">
          <Link to="/about" className="footer__link">About</Link>
          <Link to="/pricing" className="footer__link">Pricing</Link>
          <Link to="/career" className="footer__link">Career</Link>
        </div>
        <div className="footer__copyright">
          © {new Date().getFullYear()} SabCore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;