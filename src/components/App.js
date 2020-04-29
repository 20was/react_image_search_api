import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./search_bar";
import ImageList from "./image_list";

class App extends React.Component {
  state = { images: [] };
  submitHandler = async (value) => {
    const response = await unsplash.get("search/photos", {
      params: { query: value, orientation: "landscape" },
    });
    this.setState({ images: response.data.results });
    //console.log(this.state.images);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.submitHandler} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
