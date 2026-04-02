import { useEffect, useRef, useState } from 'react';

export default function PerformanceStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { end: 99.99, suffix: '%', label: 'Uptime Guarantee' },
    { end: 5000, suffix: '+', label: 'Happy Clients' },
    { end: 24, suffix: '/7', label: 'Support Available' },
    { end: 10, suffix: '+', label: 'Years Experience' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">
                {isVisible && <Counter end={stat.end} suffix={stat.suffix} />}
              </div>
              <div className="stat-text">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
