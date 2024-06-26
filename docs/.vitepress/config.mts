import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Blog/",
  title: "Yuchen Wu's blog",
  description: "A VitePress Site",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/Blog/favicon-200x200-dxwy.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Zotero 使用笔记",
        link: "/Zotero 使用笔记/00 Zotero 安装与上手",
      },
    ],
    sidebar: {
      "/Zotero 使用笔记/": [
        {
          text: "Zotero 使用笔记",
          items: [
            {
              text: "00 Zotero 安装与上手",
              link: "/Zotero 使用笔记/00 Zotero 安装与上手",
            },
            {
              text: "01 使用 WebDAV 协议同步 Zotero 附件——InfiniCLOUD",
              link: "/Zotero 使用笔记/01 使用 WebDAV 协议同步 Zotero 附件——InfiniCLOUD",
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/dxwy" }],
    lastUpdated: {
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    editLink: {
      pattern: "https://github.com/dxwy/Blog/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Copyright © 2024-present <a href="https://github.com/dxwy">dxwy</a>',
    },
    logo: "/favicon-200x200-dxwy.png",
  },
});
