import { useEffect } from 'react';
import DomainSearch from '../components/DomainSearch';
import WhyChooseUs from '../components/WhyChooseUs';
import Security from '../components/Security';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function DomainsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="domains-page-header">
        <div className="container-custom text-center">
          <div className="section-badge">
            <span>Domain Services</span>
          </div>
          <h1 className="domains-page-title">
            Find & Register Your Perfect Domain
          </h1>
          <p className="domains-page-subtitle">
            Secure your online presence with premium domain names and world-class management tools
          </p>
        </div>
      </div>
      <DomainSearch />
      <WhyChooseUs />
      <Security />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
