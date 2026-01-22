import React from 'react';
import { BookOpen, Brain, CheckCircle2, Calendar, Target } from 'lucide-react';

const ProductSection = () => {
  const supportedSubjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science basics',
    'More subjects expanding...',
  ];

  const whatYouGet = [
    'Clear explanations at your level',
    'Step-by-step solutions with mistake alerts',
    'Personalized study plans',
    'Practice quizzes (roadmap)',
    'Progress tracking (roadmap)',
  ];

  const whatItIsNot = [
    'Not a replacement for teachers or textbooks',
    'Not guaranteed error-free - always verify important work',
    'Not for cheating - designed to help you learn',
  ];

  return (
    <section id="product" className="section section-alt">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          What LearningPanda does
        </h2>

        <div style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <BookOpen size={32} color="var(--accent-text)" />
              <h3 className="heading-3">Supported Subjects</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {supportedSubjects.map((subject, idx) => (
                <span
                  key={idx}
                  className="body-small"
                  style={{
                    background: 'var(--accent-wash)',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    color: 'var(--accent-text)',
                    fontWeight: 500,
                  }}
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="product-card" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <CheckCircle2 size={32} color="var(--accent-text)" />
              <h3 className="heading-3">What You Get</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {whatYouGet.map((item, idx) => (
                <li key={idx} className="body-medium" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--accent-text)',
                      fontWeight: 'bold',
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="product-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Brain size={32} color="var(--accent-text)" />
              <h3 className="heading-3">What It Is Not</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {whatItIsNot.map((item, idx) => (
                <li key={idx} className="body-medium" style={{ marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;