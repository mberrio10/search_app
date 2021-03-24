import { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
  state = {
    language: '',
    loading: false,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchRepos = (dispatch, e) => {
    e.preventDefault();
    this.setState({ loading: true });
    axios({
      method: 'get',
      url: `https://api.github.com/search/repositories?q=language:${this.state.language}&sort=stars&per_page=50`,
    })
      .then((res) => {
        dispatch({
          type: 'SEARCH_LANGUAGE',
          payload: res.data.items,
        });
        this.setState({ language: '' });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-4 p-4'>
              <h1 className='display-4 text-center'>
                <i className='fas fa-book'></i> Search For Repositories
              </h1>
              <p className='lead text-center'>
                Get the most popular repositories in your favorite language
              </p>
              <form onSubmit={this.searchRepos.bind(this, dispatch)}>
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Type Your Preferred Language'
                    name='language'
                    value={this.state.language}
                    onChange={this.onChange}
                  />
                </div>
                <div className='d-grid gap-2'>
                  <button className='btn btn-dark ' type='submit'>
                    {this.state.loading ? 'Searching...' : 'Search'}
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
