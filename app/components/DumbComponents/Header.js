import { withTranslation, Link, i18n } from "../../../i18n";
import { connect } from "react-redux";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const liStyle = {
  display: "inline",
  padding: "20px",
  backgroundColor: "#dddddd",
}

const ulStyle = {
  padding: 0
}

const Header = ({ t, lang }) => (
  <div>
    <ul style={ulStyle}>
      <li style={liStyle}>
        <a href="https://www.monster.com/jobs" style={linkStyle}>{t('links.find_jobs')}</a>
      </li>
      <li style={liStyle}>
        <a href="https://www.monster.com/resumes/post-resume2" style={linkStyle}>{t('links.upload_resume')}</a>
      </li>
      <li style={liStyle}>
        <Link href={i18n.language === 'en' ? "/salary" : "/salarie"}>
          <a style={linkStyle}>{t('links.salary_tool')}</a>
        </Link>
      </li>
      <li style={liStyle}>
        <a href="https://www.monster.com/resumes/writing-services" style={linkStyle}>{t('links.resume_help')}</a>
      </li>
      <li style={liStyle}>
        <a href="https://www.monster.com/career-advice/" style={linkStyle}>{t('links.career_advice')}</a>

      </li>
    </ul>

  </div>
);

const mapStateToProps = state => {
  return {
    lang: state.languageReducer.language
  };
};

export default connect(
  mapStateToProps)(withTranslation("common")(Header));
