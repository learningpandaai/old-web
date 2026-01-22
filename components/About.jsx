import React from 'react';
import { Heart, Users, Target } from 'lucide-react';

const About = () => {
  const team = [
    {
      role: 'Product & Vision',
      description: 'Bringing clarity to learning',
    },
    {
      role: 'Engineering',
      description: 'Building the AI that understands',
    },
    {
      role: 'Education',
      description: 'Making learning accessible',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          About LearningPanda
        </h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="product-card" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <Heart size={48} color="var(--accent-text)" style={{ margin: '0 auto 1rem' }} />
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Our Mission
            </h3>
            <p className="body-large" style={{ color: 'var(--text-body)' }}>
              Make learning clearer, more structured, and more confidence-building.
            </p>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <Target size={48} color="var(--accent-text)" style={{ marginBottom: '1rem' }} />
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
              Our Story
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
              LearningPanda was born from a simple observation: students don't just need answers—they
              need understanding, structure, and confidence. We\'re building an AI study companion that
              meets students where they are and helps them grow. Our vision is to make high-quality,
              personalized learning support accessible to every student, regardless of their
              background or resources.
            </p>
          </div>

          <div className="product-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Users size={32} color="var(--accent-text)" />
              <h3 className="heading-3">Our Team</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {team.map((member, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-section)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <p className="body-medium" style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                    {member.role}
                  </p>
                  <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;