import React, { Component } from "react";
class SearchBar extends Component {
  state = {
    value: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label htmlFor="image">Image Search</label>
          <input
            type="text"
            placeholder="search for images"
            value={this.state.value}
            onChange={(e) => {
              this.setState({
                value: e.target.value,
              });
            }}
          />
        </form>
        <h4>character searched is : {this.state.value}</h4>
      </div>
    );
  }
}

export default SearchBar;
