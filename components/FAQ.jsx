import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What classes and subjects do you support?',
      answer:
        'We currently support school and college-level Mathematics, Physics, Chemistry, Biology, and Computer Science basics. We\'re actively expanding to cover more subjects and grade levels. Join our waitlist to stay updated on new subject additions.',
    },
    {
      question: 'Is LearningPanda free?',
      answer:
        'Yes! We offer free early access to individual students during our pilot phase. In the future, we\'ll introduce Pro and School plans with advanced features, but the core functionality will remain accessible.',
    },
    {
      question: 'How accurate is LearningPanda?',
      answer:
        'LearningPanda uses advanced AI to provide helpful explanations and solutions. However, like all AI systems, it\'s not perfect. We always recommend verifying important work with your teacher or textbook, especially for homework and exams.',
    },
    {
      question: 'Does it cite sources?',
      answer:
        'LearningPanda generates explanations based on general educational knowledge. For research projects or academic papers that require citations, we recommend using your textbooks, academic databases, and consulting with your teachers.',
    },
    {
      question: 'Can it help with homework?',
      answer:
        'LearningPanda is designed to help you understand concepts and learn problem-solving methods. It can guide you through homework by explaining steps and reasoning, but it\'s meant to enhance your learning, not replace it. Always follow your school\'s academic integrity policies.',
    },
    {
      question: 'Is this cheating?',
      answer:
        'No, when used properly. LearningPanda is a learning tool, like a tutor or study guide. It helps you understand "why" and "how," not just "what." Cheating would be copying answers without understanding. We encourage you to use LearningPanda to learn, then apply that knowledge independently.',
    },
    {
      question: 'What data do you store?',
      answer:
        'We collect minimal data: your email for the waitlist, and anonymized usage patterns to improve the product. We don\'t sell your data or share it with third parties. Your study questions and conversations are private and used only to provide you with better responses.',
    },
    {
      question: 'How do I report an issue or give feedback?',
      answer:
        'We\'d love to hear from you! Email us at support@learningpanda.ai with any bugs, concerns, or suggestions. Your feedback helps us improve LearningPanda for everyone.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Frequently Asked Questions
        </h2>
        <p className="body-large" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          Everything you need to know about LearningPanda
        </p>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: '12px',
                marginBottom: '1rem',
                overflow: 'hidden',
                transition: 'box-shadow 0.2s ease',
              }}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <h3 className="heading-3" style={{ margin: 0 }}>
                  {faq.question}
                </h3>
                {openIndex === idx ? (
                  <ChevronUp size={24} color="var(--accent-text)" />
                ) : (
                  <ChevronDown size={24} color="var(--text-muted)" />
                )}
              </button>
              {openIndex === idx && (
                <div
                  style={{
                    padding: '0 1.25rem 1.25rem',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  <p className="body-medium" style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;