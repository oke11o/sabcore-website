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
      <section className="flutch">
        <div className="flutch__inner">
          <h2 className="flutch__title">AI Agent Development Platform</h2>
          <h3 className="flutch__subtitle">Flutch.ai</h3>
          <p className="flutch__content">
            We create intelligent AI agents to automate business processes in support, sales, and analytics.
          </p>
          <div className="flutch__features">
            <ul className="flutch__list">
              <li>Custom AI agent development for your specific needs</li>
              <li>No-code agent configuration</li>
              <li>Detailed real-time analytics</li>
              <li>Transparent cost control</li>
              <li>Secure deployment options</li>
              <li>Integration with existing systems</li>
            </ul>
            <div className="flutch__package">
              <h4>Complete Package Includes:</h4>
              <ul>
                <li>Business process analysis</li>
                <li>Custom agent development</li>
                <li>System integrations</li>
                <li>Team training</li>
                <li>3 months of support</li>
              </ul>
              <p className="flutch__price">Starting from $10,000</p>
            </div>
          </div>
          <div className="flutch__actions">
            <a href="https://flutch.ai/" className="flutch__cta" target="_blank" rel="noopener noreferrer">
              Learn more about Flutch.ai
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;