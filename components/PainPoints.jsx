import React from 'react';
import { AlertCircle, HelpCircle, Calendar } from 'lucide-react';

const PainPoints = () => {
  const solutions = [
    {
      icon: <HelpCircle size={40} color="var(--accent-text)" />,
      problem: 'Confusion',
      solution: 'Clear explanations at your level',
      description: 'Get concepts explained in simple terms with real examples that make sense to you.',
    },
    {
      icon: <AlertCircle size={40} color="var(--accent-text)" />,
      problem: 'Getting stuck',
      solution: 'Step-by-step solutions + common mistakes',
      description: 'See how to solve problems correctly and learn from typical errors others make.',
    },
    {
      icon: <Calendar size={40} color="var(--accent-text)" />,
      problem: 'No structure',
      solution: 'Personalized study plan + revision schedule',
      description: 'Build a realistic schedule based on your time, syllabus, and deadlines.',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Turn study challenges into strengths
        </h2>
        <div className="ai-grid">
          {solutions.map((item, idx) => (
            <div key={idx} className="product-card">
              <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
              <h3 className="heading-3" style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {item.problem} → {item.solution}
              </h3>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;