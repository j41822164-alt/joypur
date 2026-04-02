import { useEffect } from 'react';
import HostingPlans from '../components/HostingPlans';
import WhyChooseUs from '../components/WhyChooseUs';
import PerformanceStats from '../components/PerformanceStats';
import Security from '../components/Security';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function HostingPage() {
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
      <div className="hosting-page-header">
        <div className="container-custom text-center">
          <div className="section-badge">
            <span>Hosting Solutions</span>
          </div>
          <h1 className="hosting-page-title">
            Choose Your Perfect Hosting Plan
          </h1>
          <p className="hosting-page-subtitle">
            From cloud hosting to dedicated servers, find the right solution for your needs
          </p>
        </div>
      </div>
      <HostingPlans />
      <WhyChooseUs />
      <PerformanceStats />
      <Security />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
