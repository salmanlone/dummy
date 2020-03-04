import Header from "./Header";
import Footer from "./Footer";
import LanguageSwitch from "../../containers/App/Language/LanguageSelector";

const Layout = props => (
  <div>
    <Header />
    <br />
    <LanguageSwitch />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
