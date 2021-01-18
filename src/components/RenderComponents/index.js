import React from 'react';
import FetchLoading from '../FetchLoading';
import FetchError from '../FetchError';

const RenderComponents = (props) => {
  return (
    <React.Fragment>
      {props.loading ? (<FetchLoading />) : props.error ? (<FetchError />) : props.children}
    </React.Fragment>
  );
}

export default RenderComponents;