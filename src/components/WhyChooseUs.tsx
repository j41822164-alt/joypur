import { Shield, Zap, Clock, Headphones as HeadphonesIcon, Server, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized servers with SSD storage for blazing fast load times',
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with DDoS protection and SSL certificates',
    },
    {
      icon: Clock,
      title: '99.99% Uptime',
      description: 'Guaranteed uptime with redundant infrastructure and monitoring',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Expert support team available round the clock to assist you',
    },
    {
      icon: Server,
      title: 'Scalable Resources',
      description: 'Easily upgrade your plan as your business grows',
    },
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Trusted by thousands of customers worldwide',
    },
  ];

  return (
    <section className="section" id="about">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Joypur Host?</h2>
          <p className="section-subtitle">
            We provide everything you need for a successful online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card reveal-on-scroll">
              <div className="feature-icon">
                <feature.icon size={32} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
