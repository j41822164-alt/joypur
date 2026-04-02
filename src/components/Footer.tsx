import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Server } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="footer-logo">
              <Server size={32} />
              <div>
                <div className="footer-logo-text">Joypur Host</div>
                <div className="footer-tagline">Secure Hosting Provider</div>
              </div>
            </div>
            <p className="footer-description">
              Providing reliable and secure hosting solutions since 2014. Your success is our mission.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><a href="#hosting">Web Hosting</a></li>
              <li><a href="#domains">Domain Registration</a></li>
              <li><a href="#vps">VPS Hosting</a></li>
              <li><a href="#">Dedicated Servers</a></li>
              <li><a href="#">Email Hosting</a></li>
              <li><a href="#">SSL Certificates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>123 Tech Street, Dhaka, Bangladesh</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+880 1234-567890</span>
              </li>
              <li>
                <Mail size={18} />
                <span>support@joypurhost.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Joypur Host. All rights reserved.</p>
          <div className="payment-methods">
            <span>We Accept:</span>
            <div className="payment-icons">
              <div className="payment-icon">VISA</div>
              <div className="payment-icon">MC</div>
              <div className="payment-icon">AMEX</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
