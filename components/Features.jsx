import React from 'react';
import { Lightbulb, Calculator, CalendarDays, Target, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Lightbulb size={48} color="var(--accent-text)" />,
      title: 'Understand',
      description: 'Get simple explanations with examples that match your level.',
      status: 'Available',
    },
    {
      icon: <Calculator size={48} color="var(--accent-text)" />,
      title: 'Solve',
      description: 'Step-by-step solutions with common mistake alerts.',
      status: 'Available',
    },
    {
      icon: <CalendarDays size={48} color="var(--accent-text)" />,
      title: 'Plan',
      description: 'Schedule by your time, syllabus, and deadlines.',
      status: 'Available',
    },
    {
      icon: <Target size={48} color="var(--accent-text)" />,
      title: 'Practice',
      description: 'Quick quizzes and spaced revision reminders.',
      status: 'Roadmap',
    },
    {
      icon: <TrendingUp size={48} color="var(--accent-text)" />,
      title: 'Track',
      description: 'Monitor progress and focus on weak areas.',
      status: 'Roadmap',
    },
  ];

  return (
    <section id="features" className="section section-alt">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Everything you need to study smarter
        </h2>
        <p className="body-large" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          A complete toolkit for understanding, solving, and planning your studies.
        </p>
        <div className="ai-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="product-card">
              <div style={{ marginBottom: '1rem' }}>{feature.icon}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 className="heading-3" style={{ color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                {feature.status === 'Roadmap' && (
                  <span
                    className="caption"
                    style={{
                      background: 'var(--accent-wash)',
                      padding: '4px 8px',
                      borderRadius: '9999px',
                      color: 'var(--accent-text)',
                      fontWeight: 600,
                    }}
                  >
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;