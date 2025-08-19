import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

/**
 * Responsive navigation bar for the SabCore site.  It displays the
 * brand name, page links and a prominent call‑to‑action button.  On
 * small screens a hamburger icon toggles the menu.
 */
function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever a link is clicked so that
  // navigation feels natural on small devices.
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__content">
        <div className="navbar__brand">
          <NavLink to="/" className="navbar__logo" onClick={handleLinkClick}>
            SabCore
          </NavLink>
        </div>
        <button
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar__hamburger" />
          <span className="navbar__hamburger" />
          <span className="navbar__hamburger" />
        </button>
        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              'navbar__link' + (isActive ? ' navbar__link--active' : '')
            }
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              'navbar__link' + (isActive ? ' navbar__link--active' : '')
            }
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              'navbar__link' + (isActive ? ' navbar__link--active' : '')
            }
            onClick={handleLinkClick}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              'navbar__link' + (isActive ? ' navbar__link--active' : '')
            }
            onClick={handleLinkClick}
          >
            Career
          </NavLink>
          <NavLink to="/demo" className="navbar__cta" onClick={handleLinkClick}>
            Get a Demo
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;