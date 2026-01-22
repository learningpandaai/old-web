import React from 'react';
import { Shield, FileText } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Trust & Safety
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <Shield size={48} color="var(--accent-text)" style={{ marginBottom: '1rem' }} />
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Accuracy and Integrity
            </h3>
            <ul className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                We encourage you to verify important work with your teacher or textbook.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                LearningPanda is a learning aid, not a shortcut—it\'s designed to help you understand, not cheat.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                We continuously improve our AI, but it has limitations. Always use critical thinking.
              </li>
            </ul>
          </div>

          <div className="product-card">
            <FileText size={48} color="var(--accent-text)" style={{ marginBottom: '1rem' }} />
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Data Privacy
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '1rem' }}>
              Your privacy matters to us:
            </p>
            <ul className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>We collect minimal data: email for waitlist only.</li>
              <li style={{ marginBottom: '0.75rem' }}>Your study questions are private and not shared.</li>
              <li style={{ marginBottom: '0.75rem' }}>We don\'t sell or share your data with third parties.</li>
              <li style={{ marginBottom: '0.75rem' }}>Usage data is anonymized to improve the product.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;