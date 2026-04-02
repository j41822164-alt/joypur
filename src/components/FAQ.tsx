import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is included in the hosting plans?',
      answer: 'All our hosting plans include SSD storage, free SSL certificates, daily backups, email accounts, and 24/7 customer support. Higher-tier plans include additional features like CDN integration and dedicated IP addresses.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade your hosting plan at any time. The upgrade is seamless, and your website will experience no downtime during the transition.',
    },
    {
      question: 'Do you offer a money-back guarantee?',
      answer: 'We offer a 30-day money-back guarantee on all our hosting plans. If you\'re not satisfied within the first 30 days, you can request a full refund.',
    },
    {
      question: 'How secure is my data?',
      answer: 'We take security very seriously. All data is protected with enterprise-grade security measures including DDoS protection, firewalls, SSL encryption, and regular malware scans.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 customer support via live chat, email, and phone. Our expert support team is always ready to help you with any technical issues or questions.',
    },
    {
      question: 'Can I host multiple websites?',
      answer: 'Yes, depending on your plan. Our Professional and Enterprise plans allow you to host multiple websites on a single account.',
    },
  ];

  return (
    <section className="section" id="faq">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our hosting services
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-question"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}
                />
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
