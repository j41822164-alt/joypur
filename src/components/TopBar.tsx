import { Phone, Mail, MessageCircle, Zap } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="top-bar-modern">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="promo-badge">
              <Zap size={14} />
              <span>50% OFF on Annual Plans - Limited Time!</span>
            </div>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="tel:+8801234567890" className="top-bar-link">
              <Phone size={14} />
              <span>+880 1234-567890</span>
            </a>
            <a href="mailto:support@joypurhost.com" className="top-bar-link">
              <Mail size={14} />
              <span>support@joypurhost.com</span>
            </a>
            <button className="top-bar-chat-btn">
              <MessageCircle size={14} />
              <span>Live Chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
