import React from 'react';
import clsx from 'clsx';
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
                Comprehensive guides and API references to help you integrate and deploy 
                Shugur's infrastructure solutions.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--8 col--offset-2')}>
                <div className={styles.projectTile}>
                  <div className={styles.tileContent}>
                    <div className={styles.tileText}>
                      <div className={styles.titleRow}>
                        <h1>Shugur Relay</h1>
                        <span className={styles.statusBadge}>Live</span>
                      </div>
                      <p>High-performance, reliable, scalable Nostr relay</p>
                    </div>
                    <div className={styles.tileActions}>
                      <Link
                        className={clsx('button', styles.documentationButton)}
                        to="/intro">
                        View Documentation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
