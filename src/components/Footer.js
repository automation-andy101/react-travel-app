import React from 'react';
import PageLinks from './PageLinks';
import { socialLinks } from '../data';
import SocialLink from './SocialLink';


const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <PageLinks parentClass='footer-links' itemClass='footer-link' />

        <ul className="footer-icons">
          {
            socialLinks.map((link) => {
              return (
                <SocialLink key={link.id} {...link} itemClass='footer-icon' />
              )
            })
          }
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">({new Date().getFullYear()})</span> all rights reserved
        </p>
      </footer>
    </div>
  )
}

export default Footer;
