import { useState } from 'react';
import { Check, Zap, Cloud, ShoppingCart, Server, HardDrive, ArrowLeft } from 'lucide-react';

type HostingCategory = 'cloud' | 'ecom' | 'vps' | 'dedicated' | null;

export default function HostingPlans() {
  const [selectedCategory, setSelectedCategory] = useState<HostingCategory>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const categories = [
    {
      id: 'cloud' as const,
      name: 'Cloud Hosting',
      icon: Cloud,
      description: 'Scalable cloud infrastructure for modern applications',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'ecom' as const,
      name: 'eCom Hosting',
      icon: ShoppingCart,
      description: 'Optimized hosting for e-commerce platforms',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'vps' as const,
      name: 'VPS',
      icon: Server,
      description: 'Virtual Private Servers with full root access',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'dedicated' as const,
      name: 'Dedicated Server',
      icon: HardDrive,
      description: 'Powerful dedicated servers for maximum performance',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const plans = {
    cloud: [
      {
        name: 'Cloud Starter',
        description: 'Perfect for small websites',
        monthlyPrice: 4.99,
        yearlyPrice: 49.99,
        features: [
          '10 GB SSD Storage',
          '100 GB Bandwidth',
          '1 Website',
          'Free SSL Certificate',
          'Daily Backups',
          'Email Support',
        ],
        popular: false,
      },
      {
        name: 'Cloud Professional',
        description: 'Most popular for businesses',
        monthlyPrice: 9.99,
        yearlyPrice: 99.99,
        features: [
          '50 GB SSD Storage',
          'Unlimited Bandwidth',
          '5 Websites',
          'Free SSL Certificate',
          'Daily Backups',
          '24/7 Priority Support',
          'Free Domain (1 year)',
          'CDN Integration',
        ],
        popular: true,
      },
      {
        name: 'Cloud Enterprise',
        description: 'For high-traffic websites',
        monthlyPrice: 19.99,
        yearlyPrice: 199.99,
        features: [
          '200 GB SSD Storage',
          'Unlimited Bandwidth',
          'Unlimited Websites',
          'Free SSL Certificate',
          'Hourly Backups',
          '24/7 Priority Support',
          'Free Domain (1 year)',
          'CDN Integration',
          'Dedicated IP',
          'Advanced Security',
        ],
        popular: false,
      },
    ],
    ecom: [
      {
        name: 'eCom Basic',
        description: 'Start your online store',
        monthlyPrice: 14.99,
        yearlyPrice: 149.99,
        features: [
          '25 GB SSD Storage',
          'Unlimited Bandwidth',
          'WooCommerce Ready',
          'Free SSL Certificate',
          'Daily Backups',
          'Payment Gateway Integration',
          'Email Support',
        ],
        popular: false,
      },
      {
        name: 'eCom Pro',
        description: 'Grow your business',
        monthlyPrice: 29.99,
        yearlyPrice: 299.99,
        features: [
          '100 GB SSD Storage',
          'Unlimited Bandwidth',
          'All eCom Platforms',
          'Free SSL Certificate',
          'Hourly Backups',
          'Advanced Security',
          '24/7 Priority Support',
          'CDN Integration',
          'Dedicated IP',
        ],
        popular: true,
      },
      {
        name: 'eCom Enterprise',
        description: 'Scale to millions',
        monthlyPrice: 59.99,
        yearlyPrice: 599.99,
        features: [
          '500 GB SSD Storage',
          'Unlimited Bandwidth',
          'Multi-Store Support',
          'Free SSL Certificate',
          'Real-time Backups',
          'PCI Compliance',
          '24/7 Priority Support',
          'CDN Integration',
          'Multiple Dedicated IPs',
          'Advanced DDoS Protection',
        ],
        popular: false,
      },
    ],
    vps: [
      {
        name: 'VPS Basic',
        description: 'Entry level VPS',
        monthlyPrice: 19.99,
        yearlyPrice: 199.99,
        features: [
          '2 CPU Cores',
          '4 GB RAM',
          '50 GB NVMe SSD',
          '2 TB Bandwidth',
          'Full Root Access',
          'Free SSL Certificate',
          '24/7 Support',
        ],
        popular: false,
      },
      {
        name: 'VPS Advanced',
        description: 'More power and resources',
        monthlyPrice: 39.99,
        yearlyPrice: 399.99,
        features: [
          '4 CPU Cores',
          '8 GB RAM',
          '120 GB NVMe SSD',
          '4 TB Bandwidth',
          'Full Root Access',
          'Free SSL Certificate',
          'Daily Backups',
          'DDoS Protection',
          '24/7 Priority Support',
        ],
        popular: true,
      },
      {
        name: 'VPS Premium',
        description: 'Maximum VPS performance',
        monthlyPrice: 79.99,
        yearlyPrice: 799.99,
        features: [
          '8 CPU Cores',
          '16 GB RAM',
          '250 GB NVMe SSD',
          'Unlimited Bandwidth',
          'Full Root Access',
          'Free SSL Certificate',
          'Hourly Backups',
          'Advanced DDoS Protection',
          'Dedicated IP',
          '24/7 Priority Support',
        ],
        popular: false,
      },
    ],
    dedicated: [
      {
        name: 'Dedicated Start',
        description: 'Your own server',
        monthlyPrice: 99.99,
        yearlyPrice: 999.99,
        features: [
          'Intel Xeon 4 Cores',
          '16 GB RAM',
          '500 GB SSD',
          '10 TB Bandwidth',
          'Full Root Access',
          'Free SSL Certificate',
          'IPMI Access',
          '24/7 Support',
        ],
        popular: false,
      },
      {
        name: 'Dedicated Power',
        description: 'High performance server',
        monthlyPrice: 199.99,
        yearlyPrice: 1999.99,
        features: [
          'Intel Xeon 8 Cores',
          '32 GB RAM',
          '1 TB NVMe SSD',
          '20 TB Bandwidth',
          'Full Root Access',
          'Free SSL Certificate',
          'IPMI Access',
          'Daily Backups',
          'DDoS Protection',
          '24/7 Priority Support',
        ],
        popular: true,
      },
      {
        name: 'Dedicated Ultra',
        description: 'Maximum dedicated power',
        monthlyPrice: 399.99,
        yearlyPrice: 3999.99,
        features: [
          'Intel Xeon 16 Cores',
          '64 GB RAM',
          '2 TB NVMe SSD RAID',
          'Unlimited Bandwidth',
          'Full Root Access',
          'Free SSL Certificate',
          'IPMI Access',
          'Hourly Backups',
          'Advanced DDoS Protection',
          'Multiple IPs',
          '24/7 Priority Support',
        ],
        popular: false,
      },
    ],
  };

  if (selectedCategory === null) {
    return (
      <section className="section-modern pricing-section" id="hosting">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-badge">
              <Zap size={16} />
              <span>Hosting Solutions</span>
            </div>
            <h2 className="section-title-modern">
              Choose Your Hosting Category
            </h2>
            <p className="section-subtitle-modern">
              Select the perfect hosting solution for your needs. From cloud to dedicated servers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="hosting-category-card"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`category-icon-wrapper bg-gradient-to-br ${category.color}`}>
                  <category.icon size={40} strokeWidth={2} />
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <button className="btn-category-explore">
                  Explore Plans
                  <Zap size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const currentPlans = plans[selectedCategory];

  return (
    <section className="section-modern pricing-section" id="hosting">
      <div className="container-custom">
        <button
          onClick={() => setSelectedCategory(null)}
          className="back-to-categories-btn"
        >
          <ArrowLeft size={20} />
          <span>Back to Categories</span>
        </button>

        <div className="text-center mb-16">
          <div className="section-badge">
            {currentCategory && <currentCategory.icon size={16} />}
            <span>{currentCategory?.name}</span>
          </div>
          <h2 className="section-title-modern">
            {currentCategory?.name} Plans
          </h2>
          <p className="section-subtitle-modern">
            Choose the perfect plan that scales with your business. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="billing-toggle-modern">
          <button
            className={billingCycle === 'monthly' ? 'active' : ''}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={billingCycle === 'yearly' ? 'active' : ''}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
            <span className="save-badge-modern">Save 20%</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 pricing-grid-modern">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`pricing-card-modern ${plan.popular ? 'popular-modern' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="popular-badge-modern">
                  <Zap size={14} />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="pricing-card-header">
                <h3 className="plan-name-modern">{plan.name}</h3>
                <p className="plan-description-modern">{plan.description}</p>
              </div>

              <div className="plan-price-modern">
                <div className="price-wrapper">
                  <span className="currency-modern">$</span>
                  <span className="amount-modern">
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                </div>
                <span className="period-modern">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>

              <button className={`btn-plan-modern ${plan.popular ? 'btn-plan-primary' : 'btn-plan-outline'}`}>
                Get Started Now
              </button>

              <div className="features-divider"></div>

              <ul className="features-list-modern">
                {plan.features.map((feature, idx) => (
                  <li key={feature} style={{ animationDelay: `${idx * 50}ms` }}>
                    <div className="feature-check">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-footer-note">
          <p>All plans include 30-day money-back guarantee. Need a custom solution? <a href="#contact">Contact us</a></p>
        </div>
      </div>
    </section>
  );
}
