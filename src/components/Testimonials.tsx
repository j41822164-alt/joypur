import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'Joypur Host has been instrumental in our growth. The uptime is incredible, and their support team is always there when we need them. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Developer',
      content: 'Best hosting provider I\'ve used. Fast servers, great pricing, and the control panel makes managing multiple client sites a breeze.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'E-commerce Owner',
      content: 'Our online store has never been faster. The security features give us peace of mind, and our customers love the quick load times.',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by thousands of satisfied customers worldwide
          </p>
        </div>

        <div className="testimonial-carousel">
          <button onClick={prevSlide} className="carousel-btn prev">
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-card">
            <Quote size={48} className="quote-icon" />
            <p className="testimonial-content">
              {testimonials[currentIndex].content}
            </p>
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <div className="author-name">{testimonials[currentIndex].name}</div>
                <div className="author-role">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          <button onClick={nextSlide} className="carousel-btn next">
            <ChevronRight size={24} />
          </button>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
