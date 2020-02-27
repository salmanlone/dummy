const callbackHandler = props => {
  console.log(props);
  props.callbackHandler();
};

const Button = props => (
  <button title={props.title} onClick={props.callbackHandler}>
    {props.title}
  </button>
);

export default Button;
