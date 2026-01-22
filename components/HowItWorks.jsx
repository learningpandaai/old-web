import React from 'react';
import { Circle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Choose subject + goal',
      description: 'Tell us what you\'re studying and what you want to achieve.',
    },
    {
      number: '2',
      title: 'Ask doubt or paste question',
      description: 'Type your question or paste a problem you\'re stuck on.',
    },
    {
      number: '3',
      title: 'Get explanation + steps',
      description: 'Receive clear explanations and step-by-step solutions.',
    },
    {
      number: '4',
      title: 'Generate a plan',
      description: 'Build a personalized study schedule based on your time and deadlines.',
    },
    {
      number: '5',
      title: 'Practice + review',
      description: 'Test your knowledge and track progress over time.',
    },
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          How It Works
        </h2>
        <p className="body-large" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          Get started in 5 simple steps
        </p>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '1.5rem',
                marginBottom: idx < steps.length - 1 ? '2rem' : 0,
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  background: 'var(--gradient-button)',
                  color: 'white',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}
              >
                {step.number}
              </div>
              <div style={{ flex: 1, paddingTop: '0.5rem' }}>
                <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;