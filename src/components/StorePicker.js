import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };
  goToStore = event => {
    //1. Stop the form from submitting
    event.preventDefault();
    //2. Get the text from that input
    const storeName = this.myInput.current.value;
    console.log(this.myInput.current.value);
    //3.change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  //State is just an object that holds data which is required by components or the children of components

  //React don't touch the dom and i will handle it

  render() {
    return (
      <Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a store</h2>
          <input
            type="text"
            required
            ref={this.myInput}
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store </button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
