import React from 'react';

function useFetchRepos({ details, loading }) {
  if (loading) {
    return <h1 className='loader'>Loading...</h1>;
  }
  return (
    <div className='repo-details-container'>
      <div className='details-row'>
        <label className='label'>Name:</label>
        <span className='value'>{details.name}</span>
      </div>
      <div className='details-row'>
        <label className='label'>Forks count:</label>
        <span className='value'>{details.forks_count}</span>
      </div>
      <div className='details-row'>
        <label className='label'>Language:</label>
        <span className='value'>{details.language}</span>
      </div>
      <div className='details-row'>
        <label className='label'>Stars:</label>
        <span className='value'>{details.stargazers_count}</span>
      </div>
    </div>
  );
}

export default useFetchRepos;

// const [language, setLanguage] = useState('');
// const [loading, setLoading] = useState(false);
// const [repos, setRepos] = useState([]);
// const [details, setDetails] = useState({});
// const [detailsLoading, setDetailsLoading] = useState(false);

// function handleSubmit(e) {
//   e.preventDefault();
//   searchRepos();
// }

// function searchRepos() {
//   setLoading(true);
//   axios({
//     method: 'get',
//     url: `https://api.github.com/search/repositories?q=language:${language}&sort=stars&per_page=50`,
//   })
//     .then((res) => {
//       setLoading(false);
//       setRepos(res.data.items);
//     })
//     .catch((error) => console.error(error));
// }

// function renderRepo(item) {
//   return (
//     <div
//       className='row'
//       onClick={() => getDetails(item.language)}
//       key={item.id}
//     >
//       <h2 className='repo-name'>{item.language}</h2>
//     </div>
//   );
// }

// function getDetails(repoDetails) {
//   setDetailsLoading(true);
//   axios({
//     method: 'get',
//     url: `https://api.github.com/search/repositories?q=language:${repoDetails}&sort=stars&per_page=50`,
//   })
//     .then((res) => {
//       // console.log(res.data);
//       setDetailsLoading(false);
//       setDetails({ details: res.data.items });
//     })
//     .catch((error) => console.error(error));
// }

// <div className='page'>
//       <div className='landing-page-container'>
//         <div className='left-side'>
//           <form action='' className='form'>
//             <input
//               type='text'
//               className='input'
//               value={language}
//               placeholder='GitHub Repositories'
//               onChange={(e) => setLanguage(e.target.value)}
//             />
//             <button className='button' onClick={handleSubmit}>
//               {loading ? 'Searching...' : 'Search'}
//             </button>
//           </form>
//           <div className='results-container'>{repos.map(renderRepo)}</div>
//         </div>
//         <FetchRepos details={details} loading={detailsLoading} />
//       </div>
//     </div>
