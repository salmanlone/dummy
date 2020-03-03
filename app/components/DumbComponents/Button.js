import { Link } from '../../../i18n';

const Button = (props) => {

  const btnWithLink = props.goToLink ;

  if (btnWithLink) {
    return (
      <Link href={props.goToLink}>
        <button title={props.title} onClick={props.callbackHandler}>
          {props.title}
        </button>
      </Link>
    )
  } else
    return (
      <button title={props.title} onClick={props.callbackHandler}>
        {props.title}
      </button>
    )
};

export default Button;
