const routes = (module.exports = require("next-routes-with-locale")({
  locale: "en"
}));

routes
  .add({ name: "salary", locale: "en", pattern: "/salary", page: "salary" })
  .add({ name: "salaire", locale: "fr", pattern: "/salaire", page: "salary" })
  .add({
    name: "salaryResult",
    pattern: "/salary/:params",
    locale: "en",
    page: "salaryResult"
  })
  .add({
    name: "salaireResult",
    locale: "fr",
    pattern: "/salaire/:params",
    page: "salaryResult"
  });
