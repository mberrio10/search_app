import './App.css';
import { useState } from 'react';
// import Navbar from './components/layout/Navbar';
import FetchRepos from './components/layout/useFetchRepos';
// import { Container, Toast } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    setDetailsLoading(true);
    axios({
      method: 'get',
      url: `https://api.github.com/search/repositories?q=${language}&sort=stars&per_page=50`,
    })
      .then((res) => {
        setLoading(false);
        setDetailsLoading(false);
        setDetails(res.data.items);
        setRepos(res.data.items);
      })
      .catch((error) => console.error(error));
  }

  function renderRepo(item) {
    return (
      <div className='row' onClick={() => searchRepos(item.name)} key={item.id}>
        <h2 className='repo-name'>{item.language}</h2>
      </div>
    );
  }

  // function getDetails(repoName) {
  //   setDetailsLoading(true);
  //   axios({
  //     method: 'get',
  //     url: `https://api.github.com/search/repositories?q=${repoName}&sort=stars&per_page=50`,
  //   })
  //     .then((res) => {
  //       setDetailsLoading(false);
  //       setDetails(res.data.items);
  //     })
  //     .catch((error) => console.error(error));
  // }

  return (
    <div className='page'>
      <div className='landing-page-container'>
        <div className='left-side'>
          <form action='' className='form'>
            <input
              type='text'
              className='input'
              value={language}
              placeholder='GitHub Repositories'
              onChange={(e) => setLanguage(e.target.value)}
            />
            <button className='button' onClick={handleSubmit}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
          <div className='results-container'>{repos.map(renderRepo)}</div>
        </div>
        <FetchRepos item={details} loading={detailsLoading} />
      </div>
    </div>
  );
}

export default App;
