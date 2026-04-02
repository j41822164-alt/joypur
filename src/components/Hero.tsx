import { ArrowRight, Sparkles, Shield, Zap, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-modern" id="home">
      <div className="hero-bg-gradient"></div>
      <div className="hero-mesh-gradient"></div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="hero-content-modern">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Trusted by 5000+ Businesses Worldwide</span>
            </div>

            <h1 className="hero-title-modern">
              Next-Gen Cloud
              <br />
              <span className="hero-gradient-text">Hosting Solutions</span>
            </h1>

            <p className="hero-subtitle-modern">
              Deploy your applications on our blazing-fast infrastructure with enterprise-grade security,
              99.99% uptime SLA, and 24/7 expert support. Scale effortlessly as you grow.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="btn-hero-primary">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="btn-hero-secondary">
                View Pricing
              </button>
            </div>

            <div className="hero-stats-modern">
              <div className="hero-stat-card">
                <div className="hero-stat-icon">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="hero-stat-value">99.99%</div>
                  <div className="hero-stat-label">Uptime SLA</div>
                </div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-icon">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="hero-stat-value">100%</div>
                  <div className="hero-stat-label">Secure</div>
                </div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-icon">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="hero-stat-value">15+</div>
                  <div className="hero-stat-label">Data Centers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual-modern">
            <div className="floating-card card-1">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold">Server Status</span>
                  <div className="status-dot"></div>
                </div>
                <div className="space-y-3">
                  <div className="metric-bar">
                    <div className="metric-label">CPU Usage</div>
                    <div className="metric-progress">
                      <div className="metric-fill" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <div className="metric-bar">
                    <div className="metric-label">Memory</div>
                    <div className="metric-progress">
                      <div className="metric-fill" style={{width: '62%'}}></div>
                    </div>
                  </div>
                  <div className="metric-bar">
                    <div className="metric-label">Disk I/O</div>
                    <div className="metric-progress">
                      <div className="metric-fill" style={{width: '33%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card card-2">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="text-3xl font-bold mb-2">2.4ms</div>
                <div className="text-sm opacity-80">Average Response Time</div>
              </div>
            </div>

            <div className="floating-card card-3">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="flex items-center gap-3">
                  <div className="success-icon">✓</div>
                  <div>
                    <div className="font-semibold">99.99% Uptime</div>
                    <div className="text-xs opacity-70">Last 30 days</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-glow-orb orb-1"></div>
            <div className="hero-glow-orb orb-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
