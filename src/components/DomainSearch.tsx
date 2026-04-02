import { Search, Globe, Sparkles } from 'lucide-react';

export default function DomainSearch() {
  const tlds = [
    { ext: '.com', price: '$9.99', popular: true },
    { ext: '.net', price: '$11.99', popular: false },
    { ext: '.org', price: '$10.99', popular: false },
    { ext: '.bd', price: '$12.99', popular: false },
    { ext: '.io', price: '$34.99', popular: true },
    { ext: '.co', price: '$24.99', popular: false },
  ];

  return (
    <section className="domain-section-modern" id="domains">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-badge">
            <Globe size={16} />
            <span>Domain Registration</span>
          </div>
          <h2 className="section-title-modern">
            Claim Your Digital Identity
          </h2>
          <p className="section-subtitle-modern">
            Find and register the perfect domain name for your business. Instant activation and free privacy protection included.
          </p>
        </div>

        <div className="domain-card-modern">
          <div className="domain-search-modern">
            <div className="search-icon-wrapper">
              <Search size={22} />
            </div>
            <input
              type="text"
              placeholder="Search for your perfect domain..."
              className="domain-input-modern"
            />
            <button className="domain-btn-modern">
              Check Availability
            </button>
          </div>
        </div>

        <div className="tld-grid-modern">
          {tlds.map(tld => (
            <div key={tld.ext} className={`tld-card-modern ${tld.popular ? 'tld-popular' : ''}`}>
              {tld.popular && (
                <div className="tld-popular-badge">
                  <Sparkles size={12} />
                </div>
              )}
              <div className="tld-ext-modern">{tld.ext}</div>
              <div className="tld-price-modern">
                <span className="tld-amount">{tld.price}</span>
                <span className="tld-period">/year</span>
              </div>
            </div>
          ))}
        </div>

        <div className="domain-features-grid">
          <div className="domain-feature-item">
            <div className="feature-check-icon">✓</div>
            <span>Free WHOIS Privacy</span>
          </div>
          <div className="domain-feature-item">
            <div className="feature-check-icon">✓</div>
            <span>Easy DNS Management</span>
          </div>
          <div className="domain-feature-item">
            <div className="feature-check-icon">✓</div>
            <span>Free Email Forwarding</span>
          </div>
          <div className="domain-feature-item">
            <div className="feature-check-icon">✓</div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
