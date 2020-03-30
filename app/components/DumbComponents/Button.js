import { Link } from "../../../i18n";

const Button = props => {
  const btnWithLink = props.goToRoute;

  if (btnWithLink) {
    return (
      <Link as={props.asPath} href={props.goToRoute} >
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
