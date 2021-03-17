import React from 'react';

function useFetchRepos({ item, loading }) {
  if (loading) {
    return <h1 className='loader'>Loading...</h1>;
  }
  return (
    <div className='repo-details-container'>
      <div className='details-row'>
        <label className='label'>Name:</label>
        <span className='value'>{item.name}</span>
      </div>
      <div className='details-row'>
        <label className='label'>Forks count:</label>
        <span className='value'>{item.forks_count}</span>
      </div>
      <div className='details-row'>
        <label className='label'>Language:</label>
        <span className='value'>{item.language}</span>
      </div>
      <div className='details-row'>
        <label className='label'>Stars:</label>
        <span className='value'>{item.stargazers_count}</span>
      </div>
    </div>
  );
}

export default useFetchRepos;
