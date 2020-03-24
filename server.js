const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;

const nextI18next = require("./i18n");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();


(async () => {
  await app.prepare();
  const server = express();

  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('/salary', (req, res)=>{
    const actualPage = '/salary'
    app.render(req, res, actualPage)
  })

  server.get('/salarie', (req, res)=>{
    const actualPage = '/salary'
    app.render(req, res, actualPage)
  })

  server.get('/salarie/:query', (req, res)=>{
    const actualPage = '/salaryResult'
    const queryParams = req.params
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/salary/:query', (req, res)=>{
    const actualPage = '/salaryResult'
    const queryParams = req.params
    app.render(req, res, actualPage, queryParams)
  })

  server.get("*", (req, res) => {
    handle(req, res);
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
