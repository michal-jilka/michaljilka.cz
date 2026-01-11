import { useEffect, useState } from 'react';
import { MessageSquare, Target, Users, Compass, Sparkles, Flame, Linkedin } from 'lucide-react';
import './app.css';

export default function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const words = ['projects', 'features', 'strategy', 'results', 'value'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-intro">My name is Michal Jilka</p>
          <h1 className="hero-headline">
            I deliver <span className={`rotating-word ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              {words[currentWordIndex]}
            </span>
          </h1>
          <p className="hero-subheadline">
            Senior Product Manager & Marketing Consultant helping teams turn ideas into measurable outcomes.
          </p>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="work-section">
        <div className="work-content">
          <h2 className="section-title">How I work</h2>
          <div className="cards-grid">
            <div className="card">
              <MessageSquare className="card-icon" size={32} strokeWidth={1.5} />
              <h3 className="card-title">Fully open & honest</h3>
              <p className="card-description">
                Clear communication, radical transparency, no surprises.
              </p>
            </div>
            <div className="card">
              <Target className="card-icon" size={32} strokeWidth={1.5} />
              <h3 className="card-title">Effectiveness & delivery</h3>
              <p className="card-description">
                Focus on outcomes, fast decisions, consistent delivery.
              </p>
            </div>
            <div className="card">
              <Users className="card-icon" size={32} strokeWidth={1.5} />
              <h3 className="card-title">Cross-team collaboration</h3>
              <p className="card-description">
                Bridging product, engineering, marketing, sales and operations.
              </p>
            </div>
            <div className="card">
              <Compass className="card-icon" size={32} strokeWidth={1.5} />
              <h3 className="card-title">Agile aligned to company goals</h3>
              <p className="card-description">
                Agile execution driven by quarterly business objectives.
              </p>
            </div>
            <div className="card">
              <Sparkles className="card-icon" size={32} strokeWidth={1.5} />
              <h3 className="card-title">Product transformation</h3>
              <p className="card-description">
                From fragmented products to scalable, user-centric solutions.
              </p>
            </div>
            <div className="card">
              <Flame className="card-icon" size={32} strokeWidth={1.5} />
              <h3 className="card-title">Crisis management</h3>
              <p className="card-description">
                Leading complex and strategic projects under extreme time pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2 className="section-title">Let's work together</h2>
          <p className="contact-text">
            Looking for someone who can deliver, not just talk.
          </p>
          <div className="contact-links">
            <div className="contact-row">
              <a href="mailto:mjilka@seznam.cz" className="contact-link">
                mjilka@seznam.cz
              </a>
              <a href="tel:+420731540881" className="contact-link">
                +420 731 540 881
              </a>
            </div>
            <a href="https://www.linkedin.com/in/michal-jilka/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin-link">
              <Linkedin size={32} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}