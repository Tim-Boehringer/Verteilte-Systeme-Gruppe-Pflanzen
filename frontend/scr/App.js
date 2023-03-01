import React from "react";
import { fetchAllPlants } from "./RestClient";
class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllBooks. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let data = await fetchAllPlants();
    this.setState({ plants: data });
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <div id="title">Plantshop </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Check out our new plants
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.plants.map((plants, key) => (
            <div key={key}>
              {plants.name} by {plants.id}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
