import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

/**
 * Pricing page listing subscription tiers and frequently asked questions.
 */
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$100',
      period: '/month',
      description: 'Ideal for small businesses or startups beginning to use load testing',
      features: [
        'Up to 100 hours of testing per month',
        'Basic access to AI analytics',
        'Email support',
        '1 integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$500',
      period: '/month',
      description: 'Perfect for mid‑sized companies that need advanced capabilities',
      features: [
        'Up to 500 hours of testing per month',
        'Enhanced AI features and analytics',
        'Chat and email support',
        'Up to 5 integrations',
        'Personalised reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'On request',
      period: '',
      description: 'For large organisations that require a scalable solution',
      features: [
        'Unlimited testing hours',
        'Full access to AI analytics and automation',
        '24/7 support with dedicated manager',
        'Unlimited integrations',
        'API access'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      q: 'How does AI improve load testing?',
      a:
        'Our AI technology analyses real user behaviour patterns to create more realistic test scenarios, automatically identifies performance bottlenecks, and provides predictive insights for optimisation. This results in more efficient and accurate testing compared to traditional methods.'
    },
    {
      q: 'Can I integrate the platform with my existing tools?',
      a:
        'Yes, our platform offers extensive integration capabilities with popular CI/CD tools, monitoring systems and development platforms. We support REST APIs, webhooks and custom integrations to fit your workflow.'
    },
    {
      q: 'How quickly can I get started?',
      a:
        'You can start running your first test within minutes of signing up. Our AI assists in test creation, and our onboarding team provides guidance to ensure you’re successful from day one.'
    },
    {
      q: 'What kind of support do you provide?',
      a:
        'All plans include technical support, with response times varying by tier. Enterprise clients get 24/7 priority support with a dedicated technical account manager. We also provide extensive documentation, tutorials and regular training sessions.'
    },
    {
      q: 'Is my data secure?',
      a:
        'Security is our top priority. We maintain SOC 2 compliance, encrypt all data in transit and at rest, and provide detailed access controls. Your test data and results are completely isolated and protected.'
    },
    {
      q: 'What payment methods do you accept?',
      a:
        'We accept all major credit cards, PayPal and bank transfers for annual plans.'
    },
    {
      q: 'Can I change my plan later?',
      a:
        'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      q: 'Is there a long‑term contract?',
      a:
        'No, our services are provided on a month‑to‑month basis. You can cancel at any time.'
    },
    {
      q: 'What’s included in the free trial?',
      a:
        'The 14‑day free trial includes all features of the Professional plan, allowing you to fully test our platform.'
    }
  ];

  return (
    <main className="pricing">
      <section className="pricing__intro">
        <h1 className="pricing__heading">Pricing</h1>
        <p className="pricing__subheading">Choose the plan that’s right for you</p>
        <p className="pricing__note">All plans include a 14‑day free trial</p>
      </section>
      <section className="pricing__plans">
        <div className="plans">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`plan${plan.popular ? ' plan--popular' : ''}`}
            >
              {plan.popular && <div className="plan__badge">Most Popular</div>}
              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__description">{plan.description}</p>
              <div className="plan__price">
                <span className="plan__amount">{plan.price}</span>
                {plan.period && <span className="plan__period">{plan.period}</span>}
              </div>
              <ul className="plan__features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link to="/demo" className="plan__cta">
                Get a Demo
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="pricing__custom">
        <p>Need more information or a custom plan?</p>
        <Link to="/demo" className="pricing__customButton">
          Request a Demo
        </Link>
      </section>
      <section className="pricing__faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          {faqs.map((faq, idx) => (
            <details key={idx} className="faq__item">
              <summary className="faq__question">{faq.q}</summary>
              <p className="faq__answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Pricing;