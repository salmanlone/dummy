import React, { useState, useEffect } from "react";
import renderHTML from "react-render-html";
import styles from './Autocomplete.module.css';


const Autocomplete = ({ placeholder, callbackHandler, DataFromState  }) => {

  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, SetUserInput] = useState('');


  useEffect(() => {
    setFilteredSuggestions(DataFromState);
    setActiveSuggestion(0);
    setShowSuggestions(true);
  }, [DataFromState]);

  const onChange = (e) => {
    SetUserInput(e.target.value);
  }

  const onMouseDown = (e) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    SetUserInput(e.currentTarget.innerText)
  };

  const onKeyDown = (e) => {

    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      SetUserInput(filteredSuggestions[activeSuggestion].Text.replace(
        "<b>",
        ""
      ).replace("</b>", ""))

    }
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setActiveSuggestion(activeSuggestion - 1)

    }
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1)
    }
  };

  const onBlur = (e) => {
    setActiveSuggestion(0);
    setShowSuggestions(false);
  };


  let suggestionsListComponent;

  if (showSuggestions) {
    if (filteredSuggestions) {
      suggestionsListComponent = (
        <ul className={styles.suggestions} >
          {filteredSuggestions.map((suggestion, index) => {

            return (
              <li
                className= { index === activeSuggestion ? styles.suggestion_active : ""}
                key={suggestion.ID}
                onMouseDown={onMouseDown}
              >
                {renderHTML(suggestion.Text)}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className={styles.no_suggestions} >
          {/* <em>No suggestions</em> */}
        </div>
      );
    }
  }




  return (
    <React.Fragment>
      <input className={styles.input}
        type="text"
        placeholder={placeholder}
        onChange={e => { onChange(e), callbackHandler(e) }}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        value={userInput}
      />
      {suggestionsListComponent}
    </React.Fragment>
  )
};



export default Autocomplete;
