import React from "react";
import PropTypes from "prop-types";

// $r shows the component instance that we have in react
//When we only have to use the render method then the react functional component comes into the picture

const Header = (
  props //Implicit return
) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
