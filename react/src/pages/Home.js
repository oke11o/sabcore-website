import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Home page displaying the hero section and a grid of features.
 */
function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__title">Next‑Gen Load Testing Platform Powered by AI</h1>
          <p className="hero__subtitle">
            Transform your performance testing with intelligent automation, real‑time analytics and
            predictive insights. Get actionable results faster.
          </p>
          <div className="hero__actions">
            <Link to="/demo" className="hero__cta">Get a Demo</Link>
          </div>
        </div>
      </section>
      <section className="features">
        <h2 className="features__heading">Platform Features</h2>
        <div className="features__grid">
          <article className="feature">
            <h3 className="feature__title">AI‑Powered Test Generation</h3>
            <p className="feature__desc">
              Our AI engine automatically creates realistic test scenarios based on your actual user
              patterns and application behaviour.
            </p>
            <ul className="feature__list">
              <li>Smart traffic pattern recognition</li>
              <li>Dynamic load profile generation</li>
              <li>Automatic test script maintenance</li>
              <li>Real user behaviour simulation</li>
            </ul>
          </article>
          <article className="feature">
            <h3 className="feature__title">Real‑Time Analytics</h3>
            <p className="feature__desc">
              Get instant insights into your application’s performance with our advanced analytics
              dashboard.
            </p>
            <ul className="feature__list">
              <li>Live performance metrics</li>
              <li>AI‑powered anomaly detection</li>
              <li>Automated bottleneck identification</li>
              <li>Predictive scaling recommendations</li>
            </ul>
          </article>
          <article className="feature">
            <h3 className="feature__title">Intelligent Reporting</h3>
            <p className="feature__desc">
              Comprehensive reports with actionable insights and AI‑driven recommendations for
              optimisation.
            </p>
            <ul className="feature__list">
              <li>Custom report generation</li>
              <li>Trend analysis and forecasting</li>
              <li>Performance comparison</li>
              <li>Resource optimisation suggestions</li>
            </ul>
          </article>
          <article className="feature">
            <h3 className="feature__title">Enterprise Integration</h3>
            <p className="feature__desc">
              Seamlessly integrate with your existing tools and workflows for maximum efficiency.
            </p>
            <ul className="feature__list">
              <li>CI/CD pipeline integration</li>
              <li>API automation support</li>
              <li>Third‑party tool connectivity</li>
              <li>Custom webhook support</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;