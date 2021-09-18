import React, { useState } from 'react';
import styled from 'styled-components';

// Styles
const ContactFormWrapper = styled.div`
  .form-group {
    width: 100%;
    margin-bottom: 3rem;
  }

  label {
    font-size: 2rem;
  }

  input,
  textarea {
    min-width: 100%;
    font-size: 1.8rem;
    padding: 2rem;
    margin-top: 1.5rem;
    outline: none;
    border: none;
    border-radius: 10px;
    background: #1b1f23;
    box-shadow: var(--soft-shadow-3);
  }

  textarea {
    max-width: 100%;
    min-height: 20rem;
  }

  button {
    display: inline-block;
    font-size: var(--text-medium);
    padding: 2rem 3rem;
    border: none;
    border-radius: 5px;
    color: ${({ primary }) => (primary ? 'var(--color-gold)' : 'var(--grey-1)')};
    background-color: var(--color-dark-light);
    box-shadow: var(--soft-shadow-1);
    cursor: pointer;

    &:hover {
      background: linear-gradient(145deg, #181c20, #1d2125);
      box-shadow: (--soft-shadow-2);
      transform: translateY(-3px);
      transition: 0.3s transform ease;
      color: var(--color-gold);
    }
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <ContactFormWrapper>
      <form action="#">
        <div className="form-group">
          <label htmlFor="name">
            Full Name
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email
            <input
              type="text"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message
            <textarea
              type="text"
              placeholder="Hey there!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </ContactFormWrapper>
  );
};

export default ContactForm;
