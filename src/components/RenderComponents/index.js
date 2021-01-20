import React from 'react';
import FetchError from '../FetchError';

const RenderComponents = (props) => {
  return (
    <React.Fragment>
      {props.error ? (<FetchError />) : props.children}
    </React.Fragment>
  );
}

export default RenderComponents;