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
                Find user guides, quickstarts, tutorials, and more.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.projects}>
          <div className="container">
            <div className={styles.introContent}>
              <p className={styles.introText}>
                Learn about Shugur products, find guidance, and explore resources
              </p>
            </div>
            <div className={styles.projectsGrid}>
              <div className={styles.projectTile}>
                <div className={styles.tileContent}>
                  <div className={styles.tileText}>
                    <div className={styles.titleRow}>
                      <h1>Shugur Relay</h1>
                    </div>
                    <p>Learn more about Shugur Relay features the high performance reliable and scalable Nostr relay.</p>
                  </div>
                </div>
                <div className={styles.tileActions}>
                  <Link
                    className={clsx('button', styles.documentationButton)}
                    to="/intro">
                    View Documentation
                  </Link>
                </div>
              </div>
              {/* 
              Example for adding more project tiles:
              <div className={styles.projectTile}>
                <div className={styles.tileContent}>
                  <div className={styles.tileText}>
                    <div className={styles.titleRow}>
                      <h1>Project Name</h1>
                    </div>
                    <p>Project description goes here.</p>
                  </div>
                </div>
                <div className={styles.tileActions}>
                  <Link
                    className={clsx('button', styles.documentationButton)}
                    to="/project-link">
                    View Documentation
                  </Link>
                </div>
              </div>
              */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
