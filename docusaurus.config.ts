import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

const config: Config = {
  themes: ["@docusaurus/theme-mermaid"],
  title: "Moxie Developer Hubs",
  tagline: "SocialFi on Farcaster & Base",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true,
  },
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
          onUntruncatedBlogPosts: "ignore",
          onInlineAuthors: "ignore",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "moxie_base",
      content:
        'Earn <b>Referral Fees</b> for every buy/sell Fan Token txs. Learn more <a href="/learn/technical-deep-dive/referral-fees">here</a>.',
      backgroundColor: "#8e55ff",
      textColor: "#ffffff",
      isCloseable: false,
    },
    algolia: {
      appId: "0E7JT4EO4H",
      apiKey: "27c2281916aa623aa3fca88e9d0c6696",
      indexName: "developer-moxie",
    },
    // Replace with your project's social card
    image: "img/social-card.jpg",
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
        {
          type: "docSidebar",
          sidebarId: "learnSidebar",
          position: "left",
          label: "Learn",
        },
        {
          type: "dropdown",
          position: "left",
          label: "Use Cases",
          items: [
            {
              type: "doc",
              label: "Moxie",
              docId:
                "use-cases/moxie/get-the-circulating-supply-of-moxie-token",
            },
            {
              type: "doc",
              label: "Moxie Earn",
              docId:
                "use-cases/moxie-earn/get-all-active-moxie-earn-promotions-promoted-by-a-user",
            },
            {
              type: "doc",
              label: "Fan Token Auctions",
              docId:
                "use-cases/fan-token-auctions/get-fan-token-auction-schedule-by-status",
            },
            {
              type: "doc",
              label: "Fan Tokens",
              docId: "use-cases/fan-tokens/buy-fan-tokens",
            },
            {
              type: "doc",
              label: "Everyday Rewards",
              docId:
                "use-cases/everyday-rewards/check-users-everyday-rewards-amount",
            },
            {
              type: "doc",
              label: "Bids",
              docId:
                "use-cases/bids/get-all-bids-registered-on-certain-auction",
            },
            {
              type: "doc",
              label: "Users",
              docId: "use-cases/users/get-all-fan-tokens-owned-by-users",
            },
            {
              type: "doc",
              label: "Orders",
              docId: "use-cases/orders/get-all-orders",
            },
            {
              type: "doc",
              label: "Protocol",
              docId: "use-cases/protocol/get-all-orders",
            },
            {
              type: "doc",
              label: "Vesting",
              docId: "use-cases/vesting/get-all-users-with-moxie-locked",
            },
            {
              type: "doc",
              label: "Frames & Actions",
              docId:
                "use-cases/frames-and-actions/validate-frames-and-actions-message",
            },
          ],
        },
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
          href: "https://github.com/moxie-protocol",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Moxie Overview",
              to: "/",
            },
            {
              label: "Protocol Concepts",
              to: "https://build.moxie.xyz/the-moxie-protocol/moxie-protocol",
            },
            {
              label: "Technical Deep Dive",
              to: "/learn/technical-deep-dive",
            },
            {
              label: "Moxie Earn",
              to: "/learn/moxie-earn",
            },
            {
              label: "Glossary",
              to: "/learn/glossary",
            },
          ],
        },
        {
          title: "Use Cases",
          items: [
            {
              label: "Moxie",
              to: "/use-cases/moxie/get-the-circulating-supply-of-moxie-token",
            },
            {
              label: "Moxie Earn",
              to: "/use-cases/moxie-earn/get-all-active-moxie-earn-promotions-promoted-by-a-user",
            },
            {
              label: "Fan Token Auctions",
              to: "/use-cases/fan-token-auctions/get-fan-token-auction-schedule-by-status",
            },
            {
              label: "Fan Tokens",
              to: "/use-cases/fan-tokens/buy-fan-tokens",
            },
            {
              label: "Everyday Rewards",
              to: "/use-cases/everyday-rewards/check-users-everyday-rewards-amount",
            },
            {
              label: "Bids",
              to: "/use-cases/bids/get-all-bids-registered-on-certain-auction",
            },
            {
              label: "Users",
              to: "/use-cases/users/get-all-fan-tokens-owned-by-users",
            },
            {
              label: "Orders",
              to: "/use-cases/orders/get-all-orders",
            },
            {
              label: "Protocol",
              to: "/use-cases/protocol/get-all-orders",
            },
            {
              label: "Vesting",
              to: "/use-cases/vesting/get-all-users-with-moxie-locked",
            },
            {
              label: "Frames & Actions",
              to: "/use-cases/frames-and-actions/validate-frames-and-actions-message",
            },
          ],
        },
        {
          title: "APIs",
          items: [
            {
              label: "Protocol Subgraph",
              to: "/",
            },
            {
              label: "Auction Subgraph",
              to: "/api/auction/overview",
            },
            {
              label: "Vesting Subgraph",
              to: "/api/vesting/overview",
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
            {
              label: "Audits",
              to: "https://github.com/moxie-protocol/contracts/tree/dev/audit",
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
              href: "https://github.com/moxie-protocol",
            },
          ],
        },
      ],
      logo: {
        alt: "Audited By Code4rena",
        src: "img/code4rena-audit.png",
        href: "https://github.com/moxie-protocol/contracts/tree/dev/audit",
        width: 160,
        height: 19,
      },
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
        id: "protocol",
        schema: "./schema/protocol.graphql",
        routeBasePath: "/docs/api/protocol/09-references",
      },
    ],
    [
      "docusaurus-graphql-plugin",
      {
        id: "auction",
        schema: "./schema/auction.graphql",
        routeBasePath: "/docs/api/auction/07-references",
      },
    ],
    [
      "docusaurus-graphql-plugin",
      {
        id: "vesting",
        schema: "./schema/vesting.graphql",
        routeBasePath: "/docs/api/vesting/05-references",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/use-cases/users/get-all-fan-tokens-owned-by-users",
            from: [
              "/api/protocol/users",
              "/api/protocol/users/get-all-fan-tokens-owned-by-users",
            ],
          },
          {
            to: "/use-cases/fan-tokens/buy-fan-tokens",
            from: ["/api/protocol/fan-tokens"],
          },
          {
            to: "/use-cases/users/get-users-balance-of-certain-fan-token",
            from: [
              "/api/protocol/users/get-users-balance-of-certain-fan-token",
            ],
          },
          {
            to: "/use-cases/users/get-users-buy-orders",
            from: ["/api/protocol/users/get-users-buy-orders"],
          },
          {
            to: "/use-cases/users/get-users-sell-orders",
            from: ["/api/protocol/users/get-users-sell-orders"],
          },
          {
            to: "/use-cases/users/token-gate-user-by-certain-fan-token",
            from: ["/api/protocol/users/token-gate-user-by-certain-fan-token"],
          },
          {
            to: "/use-cases/fan-tokens/get-holders-of-certain-fan-token",
            from: ["/api/protocol/fan-tokens/get-holders-of-certain-fan-token"],
          },
          {
            to: "/use-cases/fan-tokens/get-daily-snapshots-of-a-certain-fan-token",
            from: [
              "/api/protocol/fan-tokens/get-daily-snapshots-of-a-certain-fan-token",
            ],
          },
          {
            to: "/use-cases/fan-tokens/get-hourly-snapshots-of-certain-fan-token",
            from: [
              "/api/protocol/fan-tokens/get-hourly-snapshots-of-certain-fan-token",
            ],
          },
          {
            to: "/use-cases/fan-tokens/get-the-price-of-certain-fan-token",
            from: [
              "/api/protocol/fan-tokens/get-the-price-of-certain-fan-token",
            ],
          },
          {
            to: "/use-cases/protocol/get-all-protocol-fee-transfers",
            from: [
              "/api/protocol/protocol-fees/get-all-protocol-fee-transfers",
              "/api/protocol/protocol-fees",
            ],
          },
          {
            to: "/use-cases/protocol/get-all-protocol-fee-transfers-within-certain-time-range",
            from: [
              "/api/protocol/protocol-fees/get-all-protocol-fee-transfers-within-certain-time-range",
            ],
          },
          {
            to: "/use-cases/protocol/get-all-orders",
            from: [
              "/api/protocol/orders/get-all-orders",
              "/api/protocol/orders",
            ],
          },
          {
            to: "/use-cases/protocol/get-deposits-to-vault-by-certain-user",
            from: [
              "/api/protocol/vaults/get-deposits-to-vault-by-certain-user",
              "/api/protocol/vaults",
            ],
          },
          {
            to: "/use-cases/protocol/get-deposits-to-vault-of-certain-fan-token",
            from: [
              "/api/protocol/vaults/get-deposits-to-vault-of-certain-fan-token",
            ],
          },
          {
            to: "/use-cases/protocol/get-transfers-from-vault-received-by-certain-user",
            from: [
              "/api/protocol/vaults/get-transfers-from-vault-received-by-certain-user",
            ],
          },
          {
            to: "/use-cases/protocol/get-transfers-from-vault-of-certain-fan-token",
            from: [
              "/api/protocol/vaults/get-transfers-from-vault-of-certain-fan-token",
            ],
          },
          {
            to: "/use-cases/protocol/get-protocol-summary",
            from: [
              "/api/protocol/summary/get-protocol-summary",
              "/api/protocol/summary",
            ],
          },
          {
            to: "/use-cases/users/get-users-auction-bids",
            from: [
              "/api/auction/users",
              "/api/auction/users/get-users-auction-bids",
            ],
          },
          {
            to: "/use-cases/users/get-all-auction-bids-made-by-certain-user",
            from: [
              "/api/auction/users/get-all-auction-bids-made-by-certain-user",
            ],
          },
          {
            to: "/use-cases/users/get-all-auctions-participated-by-certain-user",
            from: [
              "/api/auction/users/get-all-auctions-participated-by-certain-user",
            ],
          },
          {
            to: "/use-cases/users/get-all-users-registered-for-auctions",
            from: ["/api/auction/users/get-all-users-registered-for-auctions"],
          },
          {
            to: "/use-cases/fan-token-auctions/get-fan-token-auction-schedule-by-status",
            from: ["/api/auction/auctions"],
          },
          {
            to: "/use-cases/fan-token-auctions/get-all-fan-token-auctions-created",
            from: ["/api/auction/auctions/get-all-new-auctions"],
          },
          {
            to: "/use-cases/fan-token-auctions/get-details-of-certain-fan-token-auction",
            from: ["/api/auction/auctions/get-details-of-certain-auction"],
          },
          {
            to: "/use-cases/fan-token-auctions/get-details-of-cleared-fan-token-auction",
            from: ["/api/auction/auctions/get-details-of-cleared-auction"],
          },
          {
            to: "/use-cases/bids/get-all-bids-registered-on-certain-auction",
            from: ["/api/auction/bids/get-all-bids-on-certain-auction"],
          },
          {
            to: "/use-cases/bids/get-all-bids-created-on-certain-auction",
            from: [
              "/api/auction/bids/get-all-new-sell-orders-on-certain-auction",
            ],
          },
          {
            to: "/use-cases/bids/get-all-canceled-bids-from-certain-auction",
            from: [
              "/api/auction/bids/get-all-canceled-bids-from-certain-auction",
            ],
          },
          {
            to: "/use-cases/bids/get-all-claimed-bids-on-certain-auction",
            from: ["/api/auction/bids/get-all-claimed-bids-on-certain-auction"],
          },
          {
            to: "/use-cases/fan-token-auctions/get-auction-summary",
            from: [
              "/api/auction/summary",
              "/api/auction/summary/get-auction-summary",
            ],
          },
          {
            to: "/use-cases/vesting/get-all-users-with-moxie-locked",
            from: [
              "/api/vesting/users",
              "/api/vesting/users/get-all-users-with-moxie-locked",
            ],
          },
          {
            to: "/use-cases/vesting/get-users-locked-moxie-amount",
            from: ["/api/vesting/users/get-users-locked-moxie-amount"],
          },
          {
            to: "/use-cases/vesting/get-token-manager-details",
            from: [
              "/api/vesting/token-manager/get-token-manager-details",
              "/api/vesting/token-manager",
            ],
          },
          {
            to: "https://docs.airstack.xyz/airstack-docs-and-faqs",
            from: ["/api/airstack-graphql/overview"],
          },
          {
            to: "https://docs.airstack.xyz/airstack-docs-and-faqs/get-started/quickstart/node",
            from: [
              "/api/airstack-graphql/quickstart",
              "/api/airstack-graphql/quickstart/nodejs",
            ],
          },
          {
            to: "/use-cases/fan-token-auctions/get-fan-token-auction-schedule-by-status",
            from: [
              "/api/airstack-graphql/fan-token-auction-schedule",
              "/api/airstack-graphql/fan-token-auction-schedule/get-fan-token-auction-schedule-by-status",
            ],
          },
          {
            to: "/use-cases/fan-token-auctions/get-fan-token-auction-schedule-by-fan-token-type",
            from: [
              "/api/airstack-graphql/fan-token-auction-schedule/get-fan-token-auction-schedule-by-fan-token-type",
            ],
          },
          {
            to: "https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference",
            from: [
              "/api/airstack-graphql/references",
              "/api/airstack-graphql/references/queries",
            ],
          },
          {
            to: "/use-cases/fan-token-auctions/get-clearing-price-of-certain-auction",
            from: [
              "/api/clearing-price-api/clearing-price",
              "/api/clearing-price-api/clearing-price/get-clearing-price-of-certain-auction",
            ],
          },
          {
            to: "/api/vesting/changelog",
            from: ["/api/vesting/index"],
          },
        ],
      },
    ],
  ],
};

export default config;
