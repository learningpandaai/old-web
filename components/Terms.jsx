import React from 'react';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <section id="terms" className="section section-alt">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <FileText size={48} color="var(--accent-text)" style={{ margin: '0 auto 1rem' }} />
            <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
              Terms of Service
            </h2>
            <p className="body-small" style={{ color: 'var(--text-muted)' }}>
              Last updated: January 2025
            </p>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Acceptance of Terms
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
              By accessing and using LearningPanda, you agree to be bound by these Terms of Service and
              all applicable laws and regulations. If you do not agree, please do not use our service.
            </p>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Acceptable Use
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', marginBottom: '1rem' }}>
              You agree to use LearningPanda for legitimate learning purposes only. You may not:
            </p>
            <ul className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Use the service to cheat on exams or assignments</li>
              <li style={{ marginBottom: '0.5rem' }}>Submit copyrighted material without permission</li>
              <li style={{ marginBottom: '0.5rem' }}>Attempt to reverse-engineer or exploit the system</li>
              <li style={{ marginBottom: '0.5rem' }}>Use the service in ways that violate academic integrity policies</li>
            </ul>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Disclaimers
            </h3>
            <ul className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                LearningPanda provides educational assistance "as is" without warranties of any kind.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                We do not guarantee the accuracy, completeness, or reliability of any content.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                You are responsible for verifying information and following your institution's policies.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                LearningPanda is not a substitute for professional educational instruction.
              </li>
            </ul>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Limitation of Liability
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
              LearningPanda and its operators shall not be liable for any direct, indirect, incidental,
              or consequential damages arising from your use of the service, including but not limited
              to academic consequences or incorrect information.
            </p>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Account Termination
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
              We reserve the right to suspend or terminate accounts that violate these terms or engage
              in abusive behavior. You may delete your account at any time by contacting support.
            </p>
          </div>

          <div className="product-card">
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Changes to Terms
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
              We may update these terms from time to time. Continued use of LearningPanda after changes
              constitutes acceptance of the updated terms. We will notify users of significant changes
              via email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;