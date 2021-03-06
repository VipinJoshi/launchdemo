import React, { Component } from "react";
import Filters from "./../Filters";
import CardDetail from "./CardDetail";
import "./card.css";

class LaunchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      sortOrder: null
    };
  }

  componentDidMount() {
    const url = "https://api.spaceXdata.com/v3/launches?limit=100";
    this.getData(url);
  }
  onFilterChange(filterString) {
    const url = `https://api.spaceXdata.com/v3/launches?limit=100${filterString}`;
    this.getData(url);
  }
  getData(url) {
    fetch(url)
      .then(res => res.json())
      .then(
        response => {
          const data = response;
          this.setState({ data: data, loading: false });
        },
        error => {
          this.setState({ data: null, loading: false });
          console.log("issue in api call", error);
        }
      );
  }

  render() {
    const { loading, data } = this.state;

    return (
      <>
        <div className="title">
          <h2>SpaceX Launch Programs </h2>
        </div>

        <div className="page-container">
          <Filters onFilter={query => this.onFilterChange(query)} />
          {loading && <div className="grid">loading....</div>}
          {data && (
            <div className="grid">
              {data.map((item, index) => (
                <CardDetail
                  data={item}
                  key={`${index}_${item.flight_number}`}
                />
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default LaunchCard;
