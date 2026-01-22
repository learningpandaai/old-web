import React, { useState } from 'react';
import { BookOpen, Target } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      setTimeout(() => {
        setShowWaitlist(false);
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="heading-1" style={{ marginBottom: '1.5rem' }}>
          A study buddy that explains, solves, and plans.
        </h1>
        <p className="body-large" style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          LearningPanda helps you understand concepts, get step-by-step solutions,
          and build a realistic study plan—so you study smarter and stress less.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="btn-primary"
            onClick={() => setShowWaitlist(!showWaitlist)}
            style={{ gap: '0.5rem' }}
          >
            <Target size={20} />
            Join Waitlist
          </button>
          <a href="#demo" className="btn-secondary" style={{ gap: '0.5rem' }}>
            <BookOpen size={20} />
            Try Demo
          </a>
        </div>

        {showWaitlist && (
          <div
            style={{
              marginTop: '2rem',
              background: 'var(--bg-card)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              maxWidth: '500px',
              margin: '2rem auto 0',
            }}
          >
            {!submitted ? (
              <form onSubmit={handleWaitlist}>
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
                  Get Early Access
                </h3>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '9999px',
                    border: '1px solid var(--border-light)',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                />
                <select
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '9999px',
                    border: '1px solid var(--border-light)',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  <option>I'm preparing for: School</option>
                  <option>I'm preparing for: College</option>
                  <option>I'm preparing for: Competitive exams</option>
                  <option>I'm preparing for: Other</option>
                </select>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Get early access
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <p className="body-medium" style={{ color: 'var(--accent-text)' }}>
                  Thank you for joining! We'll be in touch soon.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;