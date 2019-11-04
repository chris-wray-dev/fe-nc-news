import React from 'react';
import { Link } from '@reach/router';

const NotFound = () => {
  return (
    <div>
      <h3>Route not found</h3>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;