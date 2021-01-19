import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';

const Header = () => {
  const { pageName } = useSelector(state => state.page);

  return (
    <div className="address-book-header">
      <p>Address Book - <b>{pageName}</b></p>
    </div>
  )
}

export default Header;