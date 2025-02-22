---
title: Home
layout: home
nav_order: 1
---

<div class="hero-section">
  <h1>
    Phala Cloud is a <span class="highlight">secure</span>, <span class="highlight">confidential</span>, and <span class="highlight">TEE-powered</span> cloud platform
  </h1>

  <p class="subtitle">Deploy confidential workloads with enterprise-grade security</p>

  <div class="cta-buttons">
    <a href="/docs/get-started/" class="button primary">Get Started</a>
    <a href="https://cloud.phala.network" class="button secondary">Check Dashboard</a>
  </div>
</div>

<div class="features-grid">
  <div class="feature-card">
    <div class="feature-icon">🔐</div>
    <h2>Unruggable AI Agent</h2>
    <p>Deploy autonomous AI agents with confidential LLM training and inference capabilities in a secure TEE environment.</p>
  </div>

  <div class="feature-card">
    <div class="feature-icon">⚡</div>
    <h2>Web2 Pricing</h2>
    <p>Flexible pricing structure with transparent costs and significant savings compared to traditional cloud providers.</p>
  </div>

  <div class="feature-card">
    <div class="feature-icon">🔍</div>
    <h2>Verifiable Computation</h2>
    <p>Strong emphasis on secure and verifiable computing with TEE, ensuring trust and integrity for all operations.</p>
  </div>

  <div class="feature-card">
    <div class="feature-icon">🌟</div>
    <h2>Open Source Foundation</h2>
    <p>Built on the <a href="https://github.com/Dstack-TEE/dstack">Dstack SDK</a>, an open-source TEE SDK developed by Phala, along with contributions from teams like Flashbots and Nethermind.</p>
  </div>
</div>

<style>
.hero-section {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 2rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #7C3AED;
}

.subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

.cta-buttons {
  margin-bottom: 2rem;
}

.button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.button.primary {
  background-color: #7C3AED;
  color: white;
}

.button.secondary {
  border: 2px solid #7C3AED;
  color: #7C3AED;
}

.code-block {
  background: #2D2D2D;
  padding: 1rem;
  border-radius: 8px;
  display: inline-block;
  margin: 1rem 0;
}

.code-block code {
  color: #fff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.feature-card {
  padding: 2rem;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-card h2 {
  margin-bottom: 1rem;
  color: #2D2D2D;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
