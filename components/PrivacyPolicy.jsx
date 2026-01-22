import React from 'react';
import { Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="section">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Lock size={48} color="var(--accent-text)" style={{ margin: '0 auto 1rem' }} />
            <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
              Privacy Policy
            </h2>
            <p className="body-small" style={{ color: 'var(--text-muted)' }}>
              Last updated: January 2025
            </p>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Information We Collect
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', marginBottom: '1rem' }}>
              We collect minimal information to provide and improve our service:
            </p>
            <ul className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Email address (for waitlist and account access)</li>
              <li style={{ marginBottom: '0.5rem' }}>Study questions and interactions (to provide responses)</li>
              <li style={{ marginBottom: '0.5rem' }}>Usage patterns (anonymized, to improve the product)</li>
            </ul>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              How We Use Your Data
            </h3>
            <ul className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>To provide personalized learning assistance</li>
              <li style={{ marginBottom: '0.5rem' }}>To communicate updates and improvements</li>
              <li style={{ marginBottom: '0.5rem' }}>To improve our AI and features (anonymized data only)</li>
              <li style={{ marginBottom: '0.5rem' }}>To ensure security and prevent abuse</li>
            </ul>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Data Retention
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
              We retain your data only as long as necessary to provide our service. You can request
              deletion of your account and data at any time by contacting support@learningpanda.ai.
            </p>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Your Rights
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', marginBottom: '1rem' }}>
              You have the right to:
            </p>
            <ul className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Access your personal data</li>
              <li style={{ marginBottom: '0.5rem' }}>Request correction or deletion</li>
              <li style={{ marginBottom: '0.5rem' }}>Opt out of communications</li>
              <li style={{ marginBottom: '0.5rem' }}>Export your data</li>
            </ul>
          </div>

          <div className="product-card">
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Third-Party Sharing
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
              We do not sell or share your personal data with third parties for marketing purposes. We
              may share anonymized, aggregated data for research and improvement purposes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;