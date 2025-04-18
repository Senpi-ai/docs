import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroSection}>
          <div>
            <h1 className={styles.heroTitle}>
              Senpi is a simple, fast, and{" "}
              <span className={styles.headerTextGradient}>
                lightweight AI agent
              </span>{" "}
              framework
            </h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttonGroup}>
              <a
                className="button button--primary button--lg"
                href="./docs/intro/#"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className={styles.heroRight}>
            <pre className={styles.codeBlock}>
              <code className="language-bash">{`pnpm create:skills`}</code>
            </pre>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader;
