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
              <span className={styles.headerTextGradient}>
                Senpi Eliza Skills Framework
              </span>
            </h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttonGroup}>
              <a
                className="button button--primary button--lg"
                href="./get-started/quickstart/build-your-first-skill"
              >
                Build Your First Skill
              </a>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroVisual}>
              <div className={styles.blurCircle}></div>
              <div className={styles.codeBlockWrapper}>
                <div className={styles.codeBlockHeader}>
                  <div className={styles.codeBlockDot}></div>
                  <div className={styles.codeBlockDot}></div>
                  <div className={styles.codeBlockDot}></div>
                  <div className={styles.codeFileName}>terminal</div>
                </div>
                <pre className={styles.codeBlock}>
                  <code>
                    <span className={styles.comment}># Uses node 23+</span>
                    <br />
                    <span className={styles.prompt}>$</span> pnpm create:skills
                    plugin-new-skills
                    <br />
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader;
