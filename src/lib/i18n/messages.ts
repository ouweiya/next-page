export type Lang = "en" | "zh";

export type I18nKey =
  | "home.title"
  | "home.subtitle"
  | "home.language"
  | "nav.blog.title"
  | "nav.blog.path"
  | "nav.counter.title"
  | "nav.counter.path"
  | "nav.demoOne.title"
  | "nav.demoOne.path"
  | "nav.demoTwo.title"
  | "nav.demoTwo.path";

const messages: Record<Lang, Record<I18nKey, string>> = {
  zh: {
    "home.title": "简单演示主页-123-567-8888",
    "home.subtitle": "这是一个最小示例：一个主页，两个其他页面。点击下面链接跳转。",
    "home.language": "语言",

    "nav.blog.title": "博客/",
    "nav.blog.path": "/blog",

    "nav.counter.title": "交互计数器",
    "nav.counter.path": "/counter",

    "nav.demoOne.title": "页面一",
    "nav.demoOne.path": "/demo-one",

    "nav.demoTwo.title": "页面二",
    "nav.demoTwo.path": "/demo-two",
  },
  en: {
    "home.title": "Simple Demo Home - 123-567-8888",
    "home.subtitle": "This is a minimal example: a home page and a few other pages. Use the links below.",
    "home.language": "Language",

    "nav.blog.title": "Blog/",
    "nav.blog.path": "/blog",

    "nav.counter.title": "Interactive Counter",
    "nav.counter.path": "/counter",

    "nav.demoOne.title": "Page One",
    "nav.demoOne.path": "/demo-one",

    "nav.demoTwo.title": "Page Two",
    "nav.demoTwo.path": "/demo-two",
  },
};

export function resolveLang(value: unknown, fallback: Lang = "zh"): Lang {
  if (value === "en" || value === "zh") return value;
  return fallback;
}

export function t(lang: Lang, key: I18nKey): string {
  return messages[lang][key] ?? messages.zh[key];
}
