import React from 'react';
import './footer.scss'; // Import your footer styles here
import { FaGithub } from 'react-icons/fa';

const teamMembers = [
  { name: 'Harshith', github: 'https://github.com/dareddyharshithreddy' }
];

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Created & Developed by Team</h3>
          </div>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <FaGithub />
                <span className="dark-color">
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    {member.name}
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p className="light-color">&copy; 2023 auction app. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
