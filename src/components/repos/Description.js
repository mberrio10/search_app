import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import LoadSpinner from '../layout/LoadSpinner';

const Description = () => {
  const { owner, repo } = useParams();
  const [meta, setMeta] = useState(null);
  const [readme, setReadme] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => {
        // console.log('Meta', res.data);
        setMeta(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(
        `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`
      )
      .then((res) => {
        // console.log('Readme', res.data);
        setReadme(res.data);
      })
      .catch((err) => console.log(err));
  });

  if (!meta) return <LoadSpinner />;
  return (
    <React.Fragment>
      <Link to='/' className='btn btn-dark btn-sm mb-4'>
        Go Back
      </Link>
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <div className='markdown-section'>
              <ReactMarkdown>{readme}</ReactMarkdown>
            </div>
          </div>
          <div className='col-4'>
            <div className='card'>
              <h5 className='card-header'>{meta.full_name}</h5>
              <div className='card-body'>
                <h6 className='mb-3'>About:</h6>
                <p className='card-text'>{meta.description}</p>
                <p className='card-text'>
                  <strong>
                    <i className='far fa-star'></i> Stars:
                  </strong>{' '}
                  {meta.stargazers_count}
                </p>
                <p className='card-text'>
                  <strong>
                    <i className='fas fa-code-branch'></i> Forks:
                  </strong>{' '}
                  {meta.forks_count}
                </p>
                <p className='card-text'>
                  <strong>
                    <i class='fas fa-exclamation-circle'></i> Open Issues:
                  </strong>{' '}
                  {meta.open_issues_count}
                </p>
                <a href={meta.homepage}>{meta.homepage}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
