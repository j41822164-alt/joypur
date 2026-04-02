import { Shield, Lock, Eye, RefreshCw, Server, AlertTriangle } from 'lucide-react';

export default function Security() {
  const features = [
    {
      icon: Shield,
      text: 'DDoS Protection & Advanced Firewall',
    },
    {
      icon: Lock,
      text: 'Free SSL Certificates for All Domains',
    },
    {
      icon: Eye,
      text: '24/7 Security Monitoring & Alerts',
    },
    {
      icon: RefreshCw,
      text: 'Automated Daily Backups',
    },
    {
      icon: Server,
      text: 'Isolated Server Environments',
    },
    {
      icon: AlertTriangle,
      text: 'Malware Scanning & Removal',
    },
  ];

  return (
    <section className="section security-section">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="security-visual">
            <div className="shield-container">
              <div className="shield-glow"></div>
              <Shield size={120} strokeWidth={1.5} />
              <div className="security-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="section-title text-left">
              Enterprise-Grade Security
            </h2>
            <p className="section-subtitle text-left mb-8">
              Your data and applications are protected by multiple layers of security,
              ensuring maximum protection against threats.
            </p>
            <ul className="security-features">
              {features.map((feature, index) => (
                <li key={index} className="security-feature-item">
                  <div className="security-icon">
                    <feature.icon size={20} />
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
