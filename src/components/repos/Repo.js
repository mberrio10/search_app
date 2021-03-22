import React from 'react';
import {Link} from 'react-router-dom'

const Repo = (props) => {
  const { items } = props;
  return (
    <div className='col-md-6'>
      <div className='card mb-4 shadow-sm'>
        <div className='card-body'>
          <h5>{items.name}</h5>
          <p className='card-text'>
            <strong>
              <i className='fas fa-globe'></i> Language
            </strong>
            : {items.language}
            <br />
            <strong>
              <i className='far fa-star'></i> Stars
            </strong>
            : {items.stargazers_count}
            <br />
            <strong>
              <i className='fas fa-code-branch'></i> Forks
            </strong>
            : {items.forks_count}
          </p>
            <Link to={`//${}`} className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right"></i> Description
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Repo;
