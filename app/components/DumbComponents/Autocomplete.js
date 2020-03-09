const linkStyle = {
  margin: "0px 15px"
};

const Autocomplete = props => (
  <input style={linkStyle} type="text" placeholder={props.placeholder} onChange={e=> props.callbackHandler(e)} />
);

export default Autocomplete;
