import React from 'react';
import { Link } from 'react-router-dom';
import './Career.css';

/**
 * Career page inviting visitors to join the SabCore team.
 */
function Career() {
  return (
    <main className="career">
      <section className="career__hero">
        <h1 className="career__title">Join Our Team</h1>
        <p className="career__subtitle">
          Be part of the team that’s revolutionising load testing with AI.
        </p>
      </section>
      <section className="career__positions">
        <div className="positions">
          <article className="position">
            <h3 className="position__title">Engineering Positions</h3>
            <p className="position__desc">
              Join our engineering team and help build the future of AI‑powered load testing.
            </p>
            <Link to="#engineering" className="position__link">
              Learn More
            </Link>
          </article>
          <article className="position">
            <h3 className="position__title">Management Positions</h3>
            <p className="position__desc">
              Lead teams and drive innovation in AI‑powered load testing.
            </p>
            <Link to="#management" className="position__link">
              Learn More
            </Link>
          </article>
        </div>
      </section>
      <section className="career__values">
        <h2>Our Values</h2>
        <ul className="values__list">
          <li>
            <h4>Innovation</h4>
            <p>We push boundaries and embrace new technologies.</p>
          </li>
          <li>
            <h4>Collaboration</h4>
            <p>We achieve more when we work together.</p>
          </li>
          <li>
            <h4>Excellence</h4>
            <p>We strive for quality in everything we do.</p>
          </li>
        </ul>
      </section>
      <section className="career__perks">
        <h2>Perks &amp; Benefits</h2>
        <ul className="perks__list">
          <li>Flexible remote work</li>
          <li>Health &amp; wellness programmes</li>
          <li>Learning &amp; development</li>
          <li>Stock options</li>
        </ul>
      </section>
      <section className="career__cta">
        <Link to="/demo" className="career__button">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}

export default Career;