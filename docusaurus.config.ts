import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  themes: ["@docusaurus/theme-mermaid"],
  title: "Senpi for Developers",
  tagline:
    "Senpi is open, modular, and infinitely extendable. An autonomous onchainGPT that informs, remembers, learns, trades, mints.",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true,
  },
  url: "https://developer.senpi.ai/",
  baseUrl: "/",
  organizationName: "senpi",
  projectName: "docs",
  deploymentBranch: "main",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: "https://github.com/moxie-protocol/docs/tree/feat/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/moxie-protocol/docs/edit/main/",
          onUntruncatedBlogPosts: "ignore",
          onInlineAuthors: "ignore",
          blogTitle: "Senpi Changelog",
          blogSidebarTitle: "Changelog",
          blogDescription: "List all the changes we've made to Senpi.",
          postsPerPage: 20,
          routeBasePath: "/changelog",
          path: "./changelog",
          feedOptions: {
            type: "all",
            title: "Senpi Changelog",
            description:
              "Keep yourself up-to-date about new features in every release",
            copyright: `Copyright © ${new Date().getFullYear()} Senpi.`,
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // announcementBar: {
    //   id: "moxie_base",
    //   content:
    //     'AI Agents and Skills Marketplace coming Feb 2025! Learn how to build a <a href="/ai-agents-and-skills-marketplace/quickstart/create-your-first-skill#step-23-integrate-the-action-into-your-plugin">AI Agent Skills</a> today!',
    //   backgroundColor: "#8e55ff",
    //   textColor: "#ffffff",
    //   isCloseable: false,
    // },
    algolia: {
      appId: "0E7JT4EO4H",
      apiKey: "27c2281916aa623aa3fca88e9d0c6696",
      indexName: "developer-moxie",
    },
    // Replace with your project's social card
    image: "img/social-card.png",
    navbar: {
      logo: {
        alt: "Senpi Logo",
        src: "img/logo.avif",
        // srcDark: "img/logo-dark.avif",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "getStartedSidebar",
          position: "left",
          label: "Get Started",
        },
        {
          type: "docSidebar",
          sidebarId: "referenceSidebar",
          position: "left",
          label: "References",
        },
        {
          type: "docSidebar",
          sidebarId: "guidelinesSidebar",
          position: "left",
          label: "Guidelines & Policies",
        },
        // { to: "/changelog", label: "Changelog", position: "left" },
        {
          href: "https://github.com/Senpi-ai",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      // links: [
      //   {
      //     title: "Learn",
      //     items: [
      //       {
      //         label: "Senpi Overview",
      //         to: "/",
      //       },
      //       {
      //         label: "Protocol Concepts",
      //         to: "https://build.moxie.xyz/the-moxie-protocol/moxie-protocol",
      //       },
      //       {
      //         label: "Technical Deep Dive",
      //         to: "/learn/technical-deep-dive",
      //       },
      //       {
      //         label: "Glossary",
      //         to: "/learn/glossary",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Senpi.`,
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
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [],
      },
    ],
  ],
};

export default config;
