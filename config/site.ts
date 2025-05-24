export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Citizen Housing ",
  description: "Make your dream home a reality.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Our Properties",
      href: "/Properties",
    },
    {
      label: "Finance",
      href: "/Finance",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/Contact",
    },
  ],
  navMenuItems: [
    {  label: "Home",
      href: "/",
    },
    {
      label: "Our Properties",
      href: "/Properties",
    },
    {
      label: "Service",
      href: "/Service",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/Contact",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
