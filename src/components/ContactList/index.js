import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAction } from '../../redux/actions/contact';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contact);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  const renderContactItems = () => {
    return contacts.map(item => {
      return (
        <Link to={`/${item.login.username}`} key={item.login.username}>
          <li>
            <img src={item.picture.thumbnail} alt={item.name.first} />
            <span>{item.name.first} {item.name.last}</span>
          </li>
        </Link>
      );
    });
  }

  return (
    <React.Fragment>
      <ul>
        {renderContactItems()}
      </ul>
    </React.Fragment>
  );
};

export default ContactList;