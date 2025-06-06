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
            <p className={styles.heroSubtitle}>
              Build custom Skills to enhance Senpi AI Agents and launch them
              into the Skills Marketplace! 🚀
            </p>
            <div className="flex gap-4 md:justify-center md:items-center lg:justify-start lg:items-start">
              <div className={styles.buttonGroup}>
                <a
                  className="button bg-gradient-to-r from-[#879df5] to-[#4c6ef5] button--lg text-white hover:text-white transition duration-300 ease-in-out opacity-90 hover:opacity-100"
                  href="./get-started/quickstart/build-your-first-skill"
                >
                  Build Your First Skill →
                </a>
              </div>
              <div className={styles.buttonGroup}>
                <a
                  className="button border border-solid border-primary/50 bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-[#879df5] to-[#4c6ef5] border button--lg hover:text-white transition duration-1000 ease-in-out hover:bg-clip-border hover:from-[#4c6ef5] hover:to-[#879df5]"
                  href="./get-started/build-with-llms"
                >
                  Build With LLMs
                </a>
              </div>
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
