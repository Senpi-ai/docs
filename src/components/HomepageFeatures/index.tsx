import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Quickstart",
    description: (
      <>
        Build your first AI Agent Skill end-to-end, from scratch to launch to
        the Senpi Skills Marketplace.
      </>
    ),
    buttonText: "Start Building!",
    buttonLink: "./get-started/quickstart/build-your-first-skill",
  },
  {
    title: "How-To Guides",
    description: (
      <>
        Learn different features of the Senpi Eliza Skills Framework to build
        more complex AI Agent Skills.
      </>
    ),
    buttonText: "Learn More",
    buttonLink: "./get-started/guides",
  },
  {
    title: "Ready To Launch?",
    description: (
      <>
        If you're looking to launch your skill soon, check out the{" "}
        <a href="./guidelines-and-policies/pre-launch-checklist">
          Pre-Launch Checklist
        </a>
        .
      </>
    ),
    buttonText: "Go To Checklist",
    buttonLink: "./guidelines-and-policies/pre-launch-checklist",
  },
];

function Feature({ title, description, buttonText, buttonLink }) {
  return (
    <div className={clsx("col")}>
      <div
        className="margin--md"
        style={{
          height: "100%",
        }}
      >
        <div className="card__body text--center padding--md border border-solid rounded-lg border-primary/50">
          <Heading
            as="h2"
            style={{
              color: "var(--ifm-heading-color)",
            }}
          >
            {title}
          </Heading>
          <p>{description}</p>
          <div className={styles.buttonGroup}>
            <a
              className="button bg-gradient-to-r from-[#879df5] to-[#4c6ef5] button--lg text-white hover:text-white transition duration-300 ease-in-out opacity-90 hover:opacity-100"
              href={buttonLink}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={styles.featureGrid}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
