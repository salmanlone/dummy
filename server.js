const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;

const nextI18next = require("./i18n");

const serverRouterConfig = require('./routing.config.server');

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('/salary', (req, res) => {
    req.i18n.changeLanguage('en');
    const actualPage = '/salary'
    app.render(req, res, actualPage)
  })

  server.get('/salarie', (req, res) => {
    // req.i18n.
    // req.i18n.init({ defaultLanguage: 'fr' })
    req.i18n.changeLanguage('fr');
    const actualPage = '/salary'
    app.render(req, res, actualPage)
  })

  server.get('/salarie/:query', (req, res) => {
    req.i18n.changeLanguage('fr');
    const actualPage = '/salaryResult'
    const queryParams = req.params
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/salary/:query', (req, res) => {
    req.i18n.changeLanguage('en');
    const actualPage = '/salaryResult';
    const queryParams = req.params;
    if(serverRouterConfig.isUrlValid(queryParams)){
      const formatedParams = serverRouterConfig.formatRouteParams(queryParams.query);
      console.log('formated Params :::', formatedParams);
      app.render(req, res, actualPage, formatedParams);
    }
    else{
      app.render(req, res, '/_error');
    }
  })

  server.get("*", (req, res) => {
    handle(req, res);
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
