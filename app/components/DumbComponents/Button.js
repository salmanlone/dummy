// import { Link } from "../../../i18n";
import { Link } from "../../../routes";

const Button = props => {
  const btnWithLink = props.goToRoute;

  if (btnWithLink) {
    return (
      <Link href={props.goToRoute + props.params} locale={props.locale}>
        <button title={props.title} onClick={props.callbackHandler}>
          {props.title}
        </button>
      </Link>
    );
  } else
    return (
      <button title={props.title} onClick={props.callbackHandler}>
        {props.title}
      </button>
    );
};

export default Button;
