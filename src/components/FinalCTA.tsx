import { Rocket } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="cta-section">
      <div className="container-custom text-center">
        <div className="cta-content">
          <Rocket size={64} className="cta-icon" />
          <h2 className="cta-title">
            Ready to Launch Your Website?
          </h2>
          <p className="cta-subtitle">
            Join thousands of satisfied customers and experience the best hosting service
          </p>
          <button className="btn-cta">
            Get Started Today
          </button>
          <p className="cta-note">
            30-day money-back guarantee • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
