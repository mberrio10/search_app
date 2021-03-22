import React, { Component } from 'react';
import { Consumer } from '../../context';
import LoadSpinner from '../layout/LoadSpinner';
import Repo from '../repos/Repo';

class Repos extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { repositories, heading } = value;

          if (repositories === undefined || repositories.length === 0) {
            return <LoadSpinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className='text-center mb-4'>{heading}</h3>
                <div className='row'>
                  {repositories.map((item) => (
                    <Repo key={item.id} items={item} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Repos;
