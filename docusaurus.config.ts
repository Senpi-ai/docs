import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";
import fs from "node:fs";
const sdksHTML = fs.readFileSync("./src/snippets/sdks.html", "utf-8");

const config: Config = {
  title: "Moxie Developer Hubs",
  tagline: "Empowering the Farcaster Economy",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://moxie-protocol.github.io",
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
            // {
            //   type: "html",
            //   value: sdksHTML,
            //   className: "dyte-dropdown",
            // },
            {
              type: "doc",
              label: "Protocol Subgraphs",
              docId: "api/protocol/overview",
            },
            {
              type: "doc",
              label: "Auction Subgraphs",
              docId: "api/auction/overview",
            },
            {
              type: "doc",
              label: "Vesting Subgraphs",
              docId: "api/vesting/overview",
            },
          ],
        },
        // {
        //   type: "dropdown",
        //   position: "left",
        //   label: "Contracts",
        //   items: [
        //     {
        //       type: "doc",
        //       label: "Protocol Contracts",
        //       docId: "contract/protocol/index",
        //     },
        //     {
        //       type: "doc",
        //       label: "Token Distribution Contracts",
        //       docId: "contract/token-distribution/index",
        //     },
        //   ],
        // },
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
      style: "dark",
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
          title: "Contracts",
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
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Moxie Protocol Foundation. Developer with 💜 by Airstack.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["json"],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [tailwindPlugin],
};

export default config;
