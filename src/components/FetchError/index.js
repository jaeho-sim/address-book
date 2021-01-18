import React from 'react';
import { useSelector } from 'react-redux';

const FetchError = () => {
  const { contact } = useSelector(state => state);
  return <p>Fetch Error: {contact.error}</p>;
}

export default FetchError;