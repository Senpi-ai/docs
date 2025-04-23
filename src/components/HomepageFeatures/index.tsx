import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    icon: "🤖",
    title: "Quickstart",
    description: <>Build your first skill end-to-end, from start to finish.</>,
  },
  {
    icon: "🧠",
    title: "How-To Guides",
    description: (
      <>
        Learn different features of the framework to build more complex skills.
      </>
    ),
  },
  {
    icon: "🔌",
    title: "Launching Skill Soon?",
    description: (
      <>
        If you're looking to launch your skill soon, check out the{" "}
        <a href="./guidelines-and-policies/pre-launch-checklist">
          Pre-Launch Checklist
        </a>
        .
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col")}>
      <div
        className="margin--md"
        style={{
          height: "100%",
        }}
      >
        <div className="card__body text--left padding--md">
          <icon className={styles.featureIcon}>{icon}</icon>
          <Heading
            as="h3"
            style={{
              color: "var(--ifm-heading-color)",
            }}
          >
            {title}
          </Heading>
          <p>{description}</p>
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
