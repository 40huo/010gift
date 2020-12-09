module.exports = {
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      {
        name: "keywords",
        contents:
          "vuepress,docs,gift,present,holiday,girlfriend,boyfriend,wife,husband,bag,perfume,luxury,礼物,口红,包,奢侈品,男朋友,女朋友,老公,老婆,节日,纪念日"
      }
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "010Gift",
      description: "最懂程序员的礼物百科"
    }
  },
  themeConfig: {
    repo: "40huo/010gift",
    smoothScroll: true,
    editLinks: true,
    docsDir: "docs",
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: require("./nav/zh"),
        sidebar: {}
      }
    }
  },
  extraWatchFiles: [".vuepress/nav/zh.js"],
  plugins: [
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html"
      }
    ],
    ["vuepress-plugin-mathjax", { target: "svg", macros: { "*": "\\times" } }],
    "@vuepress/nprogress",
    "@vuepress/medium-zoom",
    "@vuepress/back-to-top",
    ["sitemap", { hostname: "https://010gift.40huo.cn/" }],
    [
      "@vuepress/last-updated",
      {
        transformer: timestamp => {
          return new Date(timestamp).toISOString();
        }
      }
    ]
  ]
};
