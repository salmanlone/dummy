import Autocomplete from "./Autocomplete";
import Button from "./Button";

const linkStyle = {
  marginRight: 15
};

const SearchCard = () => (
  <div style={linkStyle}>
    <Autocomplete placeholder="job title" />
    <Autocomplete placeholder="location" />
    <Button title="Find Salary" />
  </div>
);

export default SearchCard;
