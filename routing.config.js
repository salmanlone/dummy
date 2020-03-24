const routingConfig = [
  {
    lang: "en",
    pageRoute: "/salary",
    asPath: "/salary"
  },
  {
    lang: "fr",
    pageRoute: "/salary",
    asPath: "/salarie"
  },
  {
    lang: "en",
    pageRoute: "/salaryResult",
    asPath: "/salary/"
  },
  { 
    lang: "fr",
    pageRoute: "/salaryResult",
    asPath: "/salarie/"
  },
];

// export const getPathByLang = language => {
//   return routingConfig.find(a => a.lang === language);
// };
export const getPathByPathname = (pathname, lng) => {
  return routingConfig.find(a => a.pageRoute === pathname &&  a.lang === lng);
};
