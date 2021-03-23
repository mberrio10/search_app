import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import LoadSpinner from '../layout/LoadSpinner';

class Description extends Component {
  state = {
    description: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://api.github.com/search/repositories?q=language&sort=stars&per_page=50`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ description: res.data.items });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { items } = this.state;
    console.log(items);
    if (items === undefined || Object.keys(items).length === 0) {
      return <LoadSpinner />;
    } else {
      return (
        <React.Fragment>
          <Link to='/' className='btn btn-dark btn-sm mb-4'>
            Go Back
          </Link>
          <div className='card'>
            <div className='card-header'>
              {items.full_name}
              <br />
              <span className='text-secondary'>{items.description}</span>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Description;
