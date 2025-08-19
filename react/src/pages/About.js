import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

/**
 * About page with company story, mission, vision and differentiators.
 */
function About() {
  return (
    <main className="about">
      <section className="about__intro">
        <h1 className="about__heading">About SabCore</h1>
        <p className="about__subheading">
          We're building the future of performance testing by combining artificial intelligence with
          years of industry expertise.
        </p>
      </section>
      <section className="about__stats">
        <div className="stat">
          <div className="stat__value">98%</div>
          <div className="stat__label">Faster Test Creation</div>
        </div>
        <div className="stat">
          <div className="stat__value">75%</div>
          <div className="stat__label">Reduced Testing Time</div>
        </div>
        <div className="stat">
          <div className="stat__value">24/7</div>
          <div className="stat__label">Automated Monitoring</div>
        </div>
      </section>
      <section className="about__story">
        <h2>Our Story</h2>
        <p>
          Founded in 2022, SabCore emerged from a simple observation: traditional load testing tools
          weren’t keeping up with modern application complexity. Our founders, with decades of
          experience in performance engineering and artificial intelligence, set out to create a
          solution that would revolutionise how companies approach load testing.
        </p>
      </section>
      <section className="about__mission">
        <h2>Our Mission</h2>
        <p>
          To empower development teams with intelligent, automated load testing solutions that ensure
          optimal application performance at any scale.
        </p>
      </section>
      <section className="about__vision">
        <h2>Our Vision</h2>
        <p>
          To become the global standard for AI‑powered performance testing, making advanced load
          testing accessible to every development team.
        </p>
      </section>
      <section className="about__difference">
        <h2>The SabCore Difference</h2>
        <div className="difference__items">
          <article className="difference__item">
            <h3>AI‑Powered Innovation</h3>
            <p>
              Our platform leverages cutting‑edge artificial intelligence to automate test
              creation, identify patterns and predict potential performance issues before they impact
              your users.
            </p>
          </article>
          <article className="difference__item">
            <h3>Real‑World Simulation</h3>
            <p>
              We don’t just generate traffic – we simulate real user behaviour patterns, ensuring
              your tests reflect actual usage scenarios and provide meaningful insights.
            </p>
          </article>
          <article className="difference__item">
            <h3>Continuous Adaptation</h3>
            <p>
              Our AI models continuously learn and adapt, improving test accuracy and helping you
              stay ahead of performance challenges in your ever‑evolving applications.
            </p>
          </article>
        </div>
      </section>
      <section className="about__cta">
        <Link to="/demo" className="about__button">
          Request a Demo
        </Link>
      </section>
    </main>
  );
}

export default About;