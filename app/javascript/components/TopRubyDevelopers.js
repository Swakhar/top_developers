import React from "react";
import PropTypes from "prop-types";
class TopRubyDevelopers extends React.Component {
  constructor() {
    super();
    this.state = {
      since: "weekly",
      developers: []
    };
  }

  componentDidMount() {
    this.fetchResults(this.state.since);
  }

  handleSince = e => {
    this.setState({ since: e.target.value });

    this.fetchResults(e.target.value);
  };

  fetchResults = since => {
    fetch(`/ruby_developers?since=${since}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(results => {
        this.setState({ developers: results });
      });
  };

  render() {
    return (
      <React.Fragment>
        <select value={this.state.since} onChange={this.handleSince}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <table className="developers">
          <tr>
            <th>Profile Picture</th>
            <th>Fullname</th>
            <th>Username</th>
            <th>Github Link</th>
            <th>Repository Name</th>
            <th>Repository Description</th>
            <th>Repository Url</th>
          </tr>
          {this.state.developers.map(developer => (
            <tr key={developer.username}>
              <td>
                <img src={developer.avatar} alt={developer.username} />
              </td>
              <td>{developer.name}</td>
              <td>
                <em>{developer.username}</em>
              </td>
              <td>
                <a href={developer.url}>Github Link</a>
              </td>
              <td>{developer.repo.name}</td>
              <td>{developer.repo.description}</td>
              <td>
                <a href={developer.repo.url}>Link</a>
              </td>
            </tr>
          ))}
        </table>
      </React.Fragment>
    );
  }
}

TopRubyDevelopers.prototypes = {
  greeting: PropTypes.string
};

export default TopRubyDevelopers;
