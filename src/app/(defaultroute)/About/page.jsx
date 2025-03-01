'use client';

import React from 'react';

const About = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.7',
    padding: '30px',
    color: '#333',
    maxWidth: '960px',
    margin: '0 auto',
  };

  const heroStyle = {
    backgroundColor: '#e9ecef',
    padding: '60px',
    textAlign: 'center',
    borderRadius: '10px',
  };

  const heroTitleStyle = {
    fontSize: '3rem',
    marginBottom: '15px',
    color: 'Black',
  };

  const heroSubtitleStyle = {
    fontSize: '1.2rem',
    color: 'Black',
    marginBottom: '25px',
  };

  const sectionStyle = {
    marginTop: '40px',
    paddingBottom: '30px',
    borderBottom: '1px solid #ddd',
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    color: 'Black',
    marginBottom: '20px',
    borderBottom: '3px solid #222',
    paddingBottom: '10px',
  };

  const coreValuesListStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const coreValuesItemStyle = {
    marginBottom: '15px',
    fontSize: '1.1rem',
  };

  const teamContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const teamDescriptionStyle = {
    textAlign: 'center',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  };

  const contactLinkStyle = {
    color: '#fff',
    backgroundColor: 'Black',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-block',
    marginTop: '20px',
  };

  // Media Query Styles
  const mediaQueryStyles = {
    '@media (min-width: 768px)': {
      teamContainerStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      teamDescriptionStyle: {
        textAlign: 'left',
        width: '50%',
        paddingLeft: '30px',
      },
    },
    '@media (max-width: 767px)': {
        heroStyle: {
            padding: '40px',
        },
        heroTitleStyle: {
            fontSize: '2.2rem',
        },
        heroSubtitleStyle: {
            fontSize: '1rem',
        },
    },
  };

  return (
    <div style={containerStyle}>
      <section style={heroStyle}>
        <div>
          <h1 style={heroTitleStyle}>About A-Group, LLC in Real Estate</h1>
          <p style={heroSubtitleStyle}>Your Trusted Partner in Property Solutions</p>
          <p>
            This company was founded in 2024 by <strong>Omotayo Alogba</strong> with a vision to
            transform the real estate experience through innovation and client-focused service.
          </p>
          <p>
            We're revolutionizing the way people find and purchase their dream
            homes. Our app provides a seamless and transparent experience from
            search to closing.
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Mission</h2>
        <p>
          To empower individuals and families with the tools and information
          they need to make confident real estate decisions. We strive to
          simplify the buying process and provide exceptional support every step
          of the way. We are dedicated to providing:
        </p>
        <ul>
          <li>Expert Guidance throughout the Buying Process</li>
          <li>Innovative Solutions for Property Management</li>
          <li>A Personalized and Stress-Free Experience</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Core Values</h2>
        <ul style={coreValuesListStyle}>
          <li style={coreValuesItemStyle}>
            <strong>Transparency:</strong> We believe in open and honest
            communication. We provide clear and upfront information on all our
            listings and services.
          </li>
          <li style={coreValuesItemStyle}>
            <strong>Innovation:</strong> We're constantly seeking new ways to
            improve the real estate experience. We leverage cutting-edge
            technology to streamline processes and provide added value to our
            clients.
          </li>
          <li style={coreValuesItemStyle}>
            <strong>Customer Focus:</strong> Your needs are our top priority. We
            listen carefully to your requirements and tailor our services to
            meet your specific goals.
          </li>
          <li style={coreValuesItemStyle}>
            <strong>Integrity:</strong> We operate with the highest ethical
            standards. You can trust us to always act in your best interest.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Meet the Team</h2>
        <div style={{
            ...teamContainerStyle,
            ...(mediaQueryStyles['@media (min-width: 768px)']?.teamContainerStyle || {}),
          }}>

          <div style={{
               ...teamDescriptionStyle,
               ...(mediaQueryStyles['@media (min-width: 768px)']?.teamDescriptionStyle || {}),
             }}>
            <p>
              We're a passionate group of real estate professionals, software
              engineers, and customer service experts dedicated to making your
              property purchase journey a success. Each member of our team
              brings a unique set of skills and experiences to the table,
              ensuring that we can provide comprehensive solutions for all your
              real estate needs.
            </p>
            <p>
              From first-time homebuyers to seasoned investors, we're here to
              guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We'd love to hear from you! Our dedicated
          team is ready to assist you with any inquiries you may have.
        </p>
        <a href="/Support" style={contactLinkStyle}>
          Contact us here
        </a>
      </section>
    </div>
  );
};

export default About;