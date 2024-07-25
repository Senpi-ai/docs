import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";
import fs from "node:fs";

const config: Config = {
  title: "Moxie Developer Hubs",
  tagline: "Empowering the Farcaster Economy",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://developer.moxie.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "moxie-protocol", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  deploymentBranch: "main",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/moxie-protocol/docs/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    algolia: {
      appId: "0E7JT4EO4H",
      apiKey: "27c2281916aa623aa3fca88e9d0c6696",
      indexName: "developer-moxie",
    },
    // Replace with your project's social card
    image: "img/social-card.png",
    navbar: {
      logo: {
        alt: "Moxie Logo",
        src: "img/logo.avif",
      },
      items: [
        {
          href: "https://build.moxie.xyz",
          label: "Whitepaper",
          position: "left",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "conceptsSidebar",
        //   position: "left",
        //   label: "Concepts",
        // },
        {
          type: "dropdown",
          position: "left",
          label: "APIs",
          items: [
            {
              type: "html",
              value:
                "<h4 style='margin-left: 0.5rem; margin-top: 0.5rem;'>SUBGRAPHS</h4>",
            },
            {
              type: "doc",
              label: "Protocol Subgraphs",
              docId: "api/protocol/overview",
              description:
                "Use the protocol subgraph to fetch fan tokens balances, holdings, buy/sell orders on the bonding curves, and more.",
            },
            {
              type: "doc",
              label: "Auction Subgraphs",
              docId: "api/auction/overview",
              description:
                "Use the auction subgraph to fetch fan token auctions data from the Moxie protocol's auction contract.",
            },
            {
              type: "doc",
              label: "Vesting Subgraphs",
              docId: "api/vesting/overview",
              description:
                "Use the vesting subgraph to fetch vesting data from the Moxie protocol's vesting contract.",
            },
            {
              type: "html",
              value: "<hr style='margin: 0.5rem;' />",
            },
            {
              type: "html",
              value:
                "<h4 style='margin-left: 0.5rem; margin-top: 1rem;'>OFFCHAIN APIS</h4>",
            },
            {
              type: "doc",
              label: "Airstack GraphQL API",
              docId: "api/airstack-graphql/overview",
              description:
                "Use Airstack’s GraphQL API to fetch Moxie Fan Token auction schedules and related data.",
            },
            {
              type: "doc",
              label: "Clearing Price API",
              docId: "api/clearing-price-api/overview",
              description:
                "Use the Clearing Price REST API to calculate clearing price order of an auction.",
            },
          ],
        },
        {
          type: "doc",
          label: "Contracts",
          docId: "contract/overview",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/moxie-protocol/docs",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Subgraphs",
          items: [
            {
              label: "Protocol APIs",
              to: "/",
            },
            {
              label: "Auction APIs",
              to: "/api/auction/overview",
            },
            {
              label: "Vesting APIs",
              to: "/api/vesting/overview",
            },
          ],
        },
        {
          title: "Offchain APIs",
          items: [
            {
              label: "Airstack GraphQL APIs",
              to: "/api/airstack-graphql/overview",
            },
            {
              label: "Clearing Price API",
              to: "/api/clearing-price-api/overview",
            },
          ],
        },
        {
          title: "Contracts",
          items: [
            {
              label: "References",
              to: "/contract/references",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Warpcast",
              href: "https://warpcast.com/moxie-protocol",
            },
            {
              label: "GitHub",
              href: "https://github.com/moxie-protocol/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Moxie Protocol Foundation. Developed with 💜 by Airstack.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["json", "bash", "php", "solidity"],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    tailwindPlugin,
    [
      "docusaurus-graphql-plugin",
      {
        id: "airstack-graphql-api",
        schema: "./schema/airstack_graphql_api.graphql",
        // it's important that routeBasePath has a different
        // value for each instance of the plugin
        routeBasePath: "/docs/api/airstack-graphql/04-references",
      },
    ],
  ],
};

export default config;
