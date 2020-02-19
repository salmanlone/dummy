import { withTranslation, Link } from "../../i18n";

const linkStyle = {
  marginRight: 15
};

const Header = ({ t }) => (
  <div>
    <Link href="/">
      <a style={linkStyle}>{t('home')}</a>
    </Link>
    <Link href="/salary">
      <a style={linkStyle}>{t('salary')}</a>
    </Link>
  </div>
);

export default withTranslation('common')(Header);
