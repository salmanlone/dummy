const express = require("express");
const path = require("path");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const i18nextMiddleware = require("i18next-express-middleware");
const Backend = require("i18next-node-fs-backend");
const i18n = require("./i18n");

// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      fallbackLng: "en",
      preload: ["en", "de"], // preload all langages
      ns: ["common", "home", "salary"], // need to preload all the namespaces
      backend: {
        loadPath: path.join(__dirname, "/locales/{{lng}}/{{ns}}.json"),
        addPath: path.join(__dirname, "/locales/{{lng}}/{{ns}}.missing.json")
      }
    },
    () => {
      // loaded translations we can bootstrap our routes
      app.prepare().then(() => {
        const server = express();

        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n));

        // serve locales for client
        server.use(
          "/locales",
          express.static(path.join(__dirname, "/locales"))
        );
        // passing the language as a query param to some custome URLs

        server.get("/:lang", (req, res) => {
          const actualPage = "/";
          const queryParams = { lang: req.params.lang };
          app.render(req, res, actualPage, queryParams);
        })

        server.get("/:lang/salary", (req, res) => {
          const actualPage = "/salary";
          const queryParams = { lang: req.params.lang };
          app.render(req, res, actualPage, queryParams);
        })

        server.get("/:lang/salary/:position/:location", (req, res) => {
          const actualPage = "/salary";
          const queryParams = { lang: req.params.lang, position: req.params.position, location: req.params.location  };
          app.render(req, res, actualPage, queryParams);
        })

        // missing keys
        server.post(
          "/locales/add/:lng/:ns",
          i18nextMiddleware.missingKeyHandler(i18n)
        );
        // use next.js
        server.get("*", (req, res) => handle(req, res));

        server.listen(3000, err => {
          if (err) throw err;
          console.log("> Ready on http://localhost:3000");
        });
      });
    }
  );
