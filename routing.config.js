const routingConfig = [
  {
    lang: "en",
    salary: "salary",
    path: "/salary/"
  },
  {
    lang: "fr",
    salary: "salaire",
    path: "/salaire/"
  },
  {
    lang: "de",
    salary: "gehalt",
    path: "/gehalt/"
  }
];

export const getPath = language => {
  return routingConfig.find(a => a.lang === language).path;
};
