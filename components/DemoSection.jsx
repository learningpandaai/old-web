import React, { useState } from 'react';
import { Send, User, Bot } from 'lucide-react';

const DemoSection = () => {
  const [activeScenario, setActiveScenario] = useState(0);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scenarios = [
    {
      title: 'Understanding a Concept',
      messages: [
        { type: 'user', text: 'Can you explain photosynthesis in simple terms?' },
        {
          type: 'assistant',
          text: 'Think of photosynthesis as a plant\'s way of making food using sunlight, water, and air. The plant\'s green leaves capture sunlight and use its energy to turn water (from the soil) and carbon dioxide (from the air) into glucose (sugar) for food. Oxygen is released as a byproduct, which is what we breathe!',
        },
        { type: 'user', text: 'What role does chlorophyll play?' },
        {
          type: 'assistant',
          text: 'Chlorophyll is the green pigment in plant leaves that captures sunlight energy. It\'s like a solar panel - it absorbs light energy and converts it into chemical energy that the plant can use to make food.',
        },
      ],
    },
    {
      title: 'Solving a Math Problem',
      messages: [
        { type: 'user', text: 'How do I solve: 2x + 5 = 13?' },
        {
          type: 'assistant',
          text: 'Let\'s solve this step by step:\n\nStep 1: Subtract 5 from both sides\n2x + 5 - 5 = 13 - 5\n2x = 8\n\nStep 2: Divide both sides by 2\n2x ÷ 2 = 8 ÷ 2\nx = 4\n\nAnswer: x = 4',
        },
        { type: 'user', text: 'How can I verify this?' },
        {
          type: 'assistant',
          text: 'Great question! Substitute x = 4 back into the original equation:\n2(4) + 5 = 13\n8 + 5 = 13\n13 = 13 ✓\n\nSince both sides are equal, our answer is correct!',
        },
      ],
    },
    {
      title: 'Creating a Study Plan',
      messages: [
        {
          type: 'user',
          text: 'I have an exam in 2 weeks covering 5 chapters. Can you help me plan?',
        },
        {
          type: 'assistant',
          text: 'I\'ll create a study plan for you:\n\nWeek 1:\n- Days 1-2: Chapter 1\n- Days 3-4: Chapter 2\n- Days 5-6: Chapter 3\n- Day 7: Review chapters 1-3\n\nWeek 2:\n- Days 8-9: Chapter 4\n- Days 10-11: Chapter 5\n- Day 12: Full review\n- Day 13: Practice tests\n- Day 14: Final revision\n\nTip: Study in 45-minute blocks with 10-minute breaks!',
        },
      ],
    },
    {
      title: 'Common Mistake Alert',
      messages: [
        { type: 'user', text: 'Why did I get the wrong answer for: (3 + 2) × 4?' },
        {
          type: 'assistant',
          text: 'Let me check the common mistakes for this problem:\n\n❌ Common Error: Ignoring parentheses and calculating 3 + 2 × 4 = 3 + 8 = 11\n\n✓ Correct approach: Follow order of operations (PEMDAS)\n1. Parentheses first: (3 + 2) = 5\n2. Then multiply: 5 × 4 = 20\n\nAnswer: 20\n\nRemember: Always solve what\'s inside parentheses first!',
        },
      ],
    },
  ];

  const handleDemoRequest = (e) => {
    e.preventDefault();
    if (demoEmail && demoEmail.includes('@')) {
      setSubmitted(true);
      setTimeout(() => {
        setShowRequestForm(false);
        setSubmitted(false);
        setDemoEmail('');
      }, 3000);
    }
  };

  return (
    <section id="demo" className="section">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          See LearningPanda in action
        </h2>
        <p className="body-medium" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Explore example conversations to see how LearningPanda helps with different study scenarios.
        </p>

        {/* Scenario Selector */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveScenario(idx)}
              className={activeScenario === idx ? 'btn-primary' : 'btn-secondary'}
              style={{ fontSize: '0.875rem', padding: '10px 20px' }}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        {/* Chat Display */}
        <div className="demo-chat" style={{ marginBottom: '2rem' }}>
          {scenarios[activeScenario].messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.type}`}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    background: msg.type === 'user' ? 'var(--accent-primary)' : 'var(--border-light)',
                    borderRadius: '50%',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {msg.type === 'user' ? <User size={16} color="white" /> : <Bot size={16} color="var(--text-primary)" />}
                </div>
                <div style={{ flex: 1 }}>
                  <p className="body-small" style={{ marginBottom: '0.25rem', fontWeight: 600 }}>
                    {msg.type === 'user' ? 'You' : 'LearningPanda'}
                  </p>
                  <p className="body-medium" style={{ whiteSpace: 'pre-line' }}>
                    {msg.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="caption" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          Demo is illustrative; results may vary.
        </p>

        {/* Request Demo Button */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn-primary" onClick={() => setShowRequestForm(!showRequestForm)} style={{ gap: '0.5rem' }}>
            <Send size={20} />
            Request Full Demo Access
          </button>
        </div>

        {/* Demo Request Form */}
        {showRequestForm && (
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
              <form onSubmit={handleDemoRequest}>
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
                  Request Demo Access
                </h3>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={demoEmail}
                  onChange={(e) => setDemoEmail(e.target.value)}
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
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Request Demo
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <p className="body-medium" style={{ color: 'var(--accent-text)' }}>
                  Thank you! We'll send you demo access details soon.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoSection;