import { withTranslation } from "../../i18n";



const Footer = ({ t }) => (
  <div className="findSocial">
    <h3>{t('find_us_on_social_media')}</h3>
    <a
      target="_blank"
      href="https://www.facebook.com/monster"
      rel="noopener noreferrer"
      className="mdi mdi-facebook"
    >
      <span className="sr-only">Facebook</span>
    </a>
    <a
      target="_blank"
      href="https://twitter.com/Monster"
      rel="noopener noreferrer"
      className="mdi mdi-twitter"
    >
      <span className="sr-only">Twitter</span>
    </a>
    <a
      target="_blank"
      href="https://www.instagram.com/monster"
      rel="noopener noreferrer"
      className="mdi mdi-instagram"
    >
      <span className="sr-only">Instagram</span>
    </a>
    <a
      target="_blank"
      href="https://www.youtube.com/monster"
      rel="noopener noreferrer"
      className="mdi mdi-youtube-play"
    >
      <span className="sr-only">YouTube</span>
    </a>
  </div>
);

export default withTranslation('footer')(Footer);
