export const siteConfig = {
  name: "Douglas Pardim",
  url: "https://dwrp.github.io",
  email: "douglas.skd@gmail.com",
  phone: "+55-27-99695-0412",
  phoneDisplay: "+55 (27) 99695-0412",
  location: {
    locality: "Serra",
    region: "ES",
    country: "BR",
  },
  links: {
    github: "https://github.com/dwrp",
    linkedin: "https://linkedin.com/in/douglas-pardim",
    cv: "/Douglas-Pardim-CV.pdf",
  },
  images: {
    cover: "https://dwrp.github.io/cover.jpeg",
    coverAlt: "https://dwrp.github.io/cover2.jpeg",
    avatar: "https://avatars.githubusercontent.com/u/34161002?v=4",
  },
} as const;

export type SiteConfig = typeof siteConfig;
