import { useEffect } from 'react';
import Hero from '../components/Hero';
import DomainSearch from '../components/DomainSearch';
import WhyChooseUs from '../components/WhyChooseUs';
import PerformanceStats from '../components/PerformanceStats';
import Security from '../components/Security';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  useEffect(() => {
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
      <Hero />
      <DomainSearch />
      <WhyChooseUs />
      <PerformanceStats />
      <Security />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
