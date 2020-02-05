const Breadcrumb = () => (
  <section className="salary-breadcrumb-section" aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a>{t => <a href="/">{t(900)}</a>}</a>
      </li>
      <li className="breadcrumb-item">
        <a>{t => <a href="/salary/">{t(396304)}</a>}</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        <span className="salaryJobTitle3">Title</span>
      </li>
    </ol>
  </section>
);

export default Breadcrumb;
