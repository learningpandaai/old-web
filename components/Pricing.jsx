import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Student',
      price: 'Free',
      description: 'Early access for individual learners',
      features: [
        'Unlimited concept explanations',
        'Step-by-step solutions',
        'Basic study planning',
        'Email support',
      ],
      cta: 'Join Waitlist',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: 'Coming soon',
      description: 'Advanced features for serious students',
      features: [
        'Everything in Student',
        'Advanced study plans',
        'Practice quizzes',
        'Progress tracking',
        'Priority support',
      ],
      cta: 'Notify Me',
      highlighted: true,
    },
    {
      name: 'Schools',
      price: 'Pilot program',
      description: 'Custom solutions for educational institutions',
      features: [
        'Everything in Pro',
        'Bulk student accounts',
        'Teacher dashboard',
        'Custom content integration',
        'Dedicated support',
      ],
      cta: 'Contact Us',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="section section-alt">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Simple, transparent pricing
        </h2>
        <p className="body-large" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          Choose the plan that works for you
        </p>

        <div className="ai-grid">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="product-card"
              style={{
                border: tier.highlighted ? '2px solid var(--accent-primary)' : '1px solid var(--border-light)',
                position: 'relative',
              }}
            >
              {tier.highlighted && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--gradient-button)',
                    color: 'white',
                    padding: '4px 16px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  Popular
                </div>
              )}
              <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>
                {tier.name}
              </h3>
              <div className="heading-2" style={{ marginBottom: '0.5rem', color: 'var(--accent-text)' }}>
                {tier.price}
              </div>
              <p className="body-small" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                {tier.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                {tier.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="body-small"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <Check size={16} color="var(--accent-text)" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#hero" className={tier.highlighted ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%' }}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;