import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import createStore from "../app/store";
import { appWithTranslation, i18n } from "../i18n";
import { compose } from "redux";

class MyApp extends App {
  render() {
    const { Component, pageProps, store, router } = this.props;

    return (
      <Provider store={store}>
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      </Provider>
    );
  }
}

// MyApp.getInitialProps = async () => (
//   let pageProps = {}
//   {namespacesRequired: ["common"]}
//   );

// MyApp.getInitialProps = async () => {
//   let pageProps = {};
//   let namespacesRequired = ["common"];
//   return { pageProps, namespacesRequired };
// };

// export default compose(
//   withRedux(createStore),
//   withReduxSaga({ async: true })
// )(appWithTranslation(MyApp));

export default compose(
  withRedux(createStore),
  withReduxSaga({ async: true })
)(appWithTranslation(MyApp));

// export default appWithTranslation(
//   compose(withRedux(createStore), withReduxSaga({ async: true }))(MyApp)
// );

// export default appWithTranslation(
//   withRedux(createStore)(withReduxSaga({ async: true }))(new MyApp())
//   // MyApp
// );

// export default compose(connect(mapStateToProps, mapDispatchToProps))(Test);
