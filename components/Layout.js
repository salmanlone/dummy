import Header from "./Header";
import Footer from "./Footer";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
