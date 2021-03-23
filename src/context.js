import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    repositories: [],
    heading: 'Top Repositories',
  };

  componentDidMount() {
    axios
      .get(
        `https://api.github.com/search/repositories?q=language&sort=stars&per_page=50`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ repositories: res.data.items });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
