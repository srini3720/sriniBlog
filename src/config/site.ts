type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Srinivasan Shanmugam Blog",
  description:
    "Srini Blogs – A technical blog and portfolio where I share my passion for coding, exploring new technologies, and building innovative solutions.",
  url: "https://srini.dev/",
  ogImage: "https://srini.dev/og",
  links: {
    twitter: "https://twitter.com/srini3720",
    github: "https://github.com/srini3720",
  },
};