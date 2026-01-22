import React, { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Get in Touch
        </h2>
        <p className="body-large" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          Have questions or feedback? We'd love to hear from you.
        </p>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="product-card" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <Mail size={32} color="var(--accent-text)" style={{ margin: '0 auto 1rem' }} />
            <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>
              Email Support
            </h3>
            <a
              href="mailto:support@learningpanda.ai"
              className="body-medium"
              style={{ color: 'var(--accent-text)', textDecoration: 'underline' }}
            >
              support@learningpanda.ai
            </a>
          </div>

          {!submitted ? (
            <div className="product-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <MessageCircle size={32} color="var(--accent-text)" />
                <h3 className="heading-3">Contact Form</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label className="body-small" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)',
                      fontSize: '1rem',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label className="body-small" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)',
                      fontSize: '1rem',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="body-small" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)',
                      fontSize: '1rem',
                      fontFamily: 'system-ui, sans-serif',
                      resize: 'vertical',
                    }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          ) : (
            <div className="product-card" style={{ textAlign: 'center' }}>
              <p className="body-large" style={{ color: 'var(--accent-text)' }}>
                Thank you for reaching out! We'll get back to you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;