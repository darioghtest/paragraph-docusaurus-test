// @ts-check
import { themes as prismThemes } from "prism-react-renderer"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Beacon",
  tagline: "Product updates from the Beacon team",
  favicon: "img/favicon.svg",

  url: "https://darioghtest.github.io",
  baseUrl: "/paragraph-docusaurus-test/",
  trailingSlash: true,

  organizationName: "darioghtest",
  projectName: "paragraph-docusaurus-test",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "blog",
          showReadingTime: true,
          blogSidebarTitle: "Recent posts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Beacon",
        logo: {
          alt: "Beacon logo",
          src: "img/favicon.svg",
        },
        items: [{ to: "/blog/", label: "Blog", position: "left" }],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} Beacon`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config
