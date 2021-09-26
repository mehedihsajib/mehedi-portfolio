import React from 'react';
import {
  FaEnvelopeOpen,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  // eslint-disable-next-line prettier/prettier
  FaPhoneAlt
} from 'react-icons/fa';
import styled from 'styled-components';
import contactImg from '../../assets/images/contactImg.svg';
import { Container } from '../../styles/CommonElements';
import ContactForm from '../ContactForm/ContactForm';
import ContactItem from '../ContactItem/ContactItem';
import SectionHeading from '../SectionHeading/SectionHeading';
import SocialLinks from '../SocialLinks/SocialLinks';

// Styles
const ContactSectionWrapper = styled.section`
  .section-header {
    text-align: center;
  }

  .contact-content {
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 5rem;
    }
  }

  .content-left {
    width: 40%;
    height: 100%;
    padding: 4rem;
    border-radius: 1rem;
    background: #1b1f23;
    box-shadow: var(--soft-shadow-1);

    @media (max-width: 992px) {
      width: 100%;
      margin-bottom: 3rem;
    }
    @media (max-width: 400px) {
      padding: 2rem;
    }
  }

  .contact-img-wrapper {
    height: 21rem;
    padding: 2rem;
    text-align: center;
    margin-bottom: 3rem;
    border-radius: 1rem;
    background: #1b1f23;
    box-shadow: var(--soft-shadow-3);
  }
  .contact-img {
    height: 100%;
  }

  .content-right {
    height: 100%;
    width: 55%;
    padding: 4rem;
    border-radius: 1rem;
    background: #1b1f23;
    box-shadow: var(--soft-shadow-1);

    @media (max-width: 992px) {
      width: 100%;
    }

    @media (max-width: 400px) {
      padding: 2rem;
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionWrapper className="section-padding">
      <Container>
        <div className="section-header">
          <SectionHeading topHeading="Get in touch" mainHeading="Contact" />
        </div>
        <div className="contact-content">
          <div className="content-left">
            <div className="contact-img-wrapper">
              <img className="contact-img" src={contactImg} alt="illustration" />
            </div>
            <ContactItem icon={<FaPhoneAlt />} text="+8801777 090833" />

            <ContactItem icon={<FaEnvelopeOpen />} text="contact.mehedihsajib @gmail.com" />
            <ContactItem icon={<FaMapMarkerAlt />} text="Tangail, Dhaka, Bangladesh" />
            <div className="social-links">
              <SocialLinks icon={<FaFacebook />} link="https://www.facebook.com/mehedihsajib00/" />
              <SocialLinks
                icon={<FaInstagram />}
                link="https://www.instagram.com/mehedi_h_sajib/"
              />
            </div>
          </div>
          <div className="content-right">
            <ContactForm />
          </div>
        </div>
      </Container>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
