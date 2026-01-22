import React from 'react';
import { Link } from 'react-scroll';
import { Mail, Shield, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-section)', padding: '3rem 1.5rem 2rem', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          <div>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              LearningPanda
            </h3>
            <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
              Your friendly AI study companion for clearer understanding and better planning.
            </p>
          </div>

          <div>
            <h4 className="body-medium" style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="features" smooth={true} duration={500} className="body-small" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  Features
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="pricing" smooth={true} duration={500} className="body-small" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  Pricing
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="demo" smooth={true} duration={500} className="body-small" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="body-medium" style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="about" smooth={true} duration={500} className="body-small" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  About
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="contact" smooth={true} duration={500} className="body-small" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  Contact
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="faq" smooth={true} duration={500} className="body-small" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="body-medium" style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="privacy" smooth={true} duration={500} className="body-small" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  Privacy Policy
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="terms" smooth={true} duration={500} className="body-small" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p className="body-small" style={{ color: 'var(--text-muted)' }}>
            © 2025 LearningPanda. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="mailto:support@learningpanda.ai" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} />
              Support
            </a>
          </div>
        </div>

        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <p className="caption" style={{ color: 'var(--text-muted)' }}>
            Trusted by early learners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;