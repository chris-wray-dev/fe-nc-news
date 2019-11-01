import React from 'react';

const Error = ({ err }) => {
  return (
    <div className="error-container">
      <h3>Error</h3>
      <p>{ err.status }</p>
      <p>{ err.msg }</p>
      
    </div>
  );
};

export default Error;