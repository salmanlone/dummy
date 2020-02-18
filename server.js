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

  //  Custom Routes for the salary application

  server.get("/", (req, res) => {
    const actualPage = "/";
    app.render(req, res, actualPage);
  });

  server.get("/salary/:position/", (req, res) => {
    const actualPage = "/salary";
    const queryParams = {
      lang: req.params.lang,
      position: req.params.position
    };
    app.render(req, res, actualPage, queryParams);
  });

  server.get("/salary/:position/:location", (req, res) => {
    const actualPage = "/salary";
    const queryParams = {
      lang: req.params.lang,
      position: req.params.position,
      location: req.params.location
    };

    //  some data we might need to use to do the checking of the routes to render the app at first time
    console.log("original Url :: ", req.headers.host);
    console.log("original Url :: ", req.originalUrl);
    console.log("base url :: ", req.baseUrl);
    console.log("query :: ", req.query);
    console.log("params :: ", req.params);
    console.log("query params :: ", req.queryParams);

    console.log("path :: ", req._parsedUrl.path);
    console.log("path name :: ", req._parsedUrl.pathname);
    console.log("href :: ", req._parsedUrl.href);

    app.render(req, res, actualPage, queryParams);
  });

  server.get("*", (req, res) => {
    handle(req, res);
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
