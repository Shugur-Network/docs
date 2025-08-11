import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A reliable, developer-friendly Nostr relay">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>Documentation</h1>
              <p>
                Find user guides, quickstarts, tutorials, and more.
              </p>
              <div className={styles.heroCtas}>
                <Link className="button button--primary button--lg" to="/intro">
                  View Docs
                </Link>
                <Link className="button button--secondary button--lg" to="/installation/quick-start">
                  Quick Start
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.projects}>
          <div className="container">
            <div className={styles.introContent}>
              <p className={styles.introText}>
                Learn about Shugur Relay, find guidance, and explore resources
              </p>
            </div>
            <h3 className={styles.sectionTitle}>Get started</h3>
            <div className={styles.projectsGrid}>
              <Link className={styles.cardLink} to="/installation/quick-start">
                <div className={styles.projectTile}>
                  <div className={styles.tileContent}>
                    <div className={styles.tileText}>
                      <h4>Quick Start</h4>
                      <p>Spin up and run a dev relay in minutes.</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className={styles.cardLink} to="/installation/installation">
                <div className={styles.projectTile}>
                  <div className={styles.tileContent}>
                    <div className={styles.tileText}>
                      <h4>Installation</h4>
                      <p>All supported setups and environments.</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className={styles.cardLink} to="/configuration">
                <div className={styles.projectTile}>
                  <div className={styles.tileContent}>
                    <div className={styles.tileText}>
                      <h4>Configuration</h4>
                      <p>Tune your relay for reliability and scale.</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className={styles.cardLink} to="/api">
                <div className={styles.projectTile}>
                  <div className={styles.tileContent}>
                    <div className={styles.tileText}>
                      <h4>API Reference</h4>
                      <p>Endpoints, parameters, and examples.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <h3 className={styles.sectionTitle}>Deep dives</h3>
            <div className={styles.projectsGrid}>
              <Link className={styles.cardLink} to="/concepts">
                <div className={styles.projectTile}>
                  <div className={styles.tileContent}>
                    <div className={styles.tileText}>
                      <h4>Concepts</h4>
                      <p>Core ideas behind Shugur Relay.</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className={styles.cardLink} to="/performance">
                <div className={styles.projectTile}>
                  <div className={styles.tileContent}>
                    <div className={styles.tileText}>
                      <h4>Performance</h4>
                      <p>Benchmarks and tuning tips.</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className={styles.cardLink} to="/troubleshooting">
                <div className={styles.projectTile}>
                  <div className={styles.tileContent}>
                    <div className={styles.tileText}>
                      <h4>Troubleshooting</h4>
                      <p>Fix common issues fast.</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className={styles.cardLink} to="/architecture">
                <div className={styles.projectTile}>
                  <div className={styles.tileContent}>
                    <div className={styles.tileText}>
                      <h4>Architecture</h4>
                      <p>How the relay is built and why.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
