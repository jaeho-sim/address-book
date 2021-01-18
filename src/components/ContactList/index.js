import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAction } from '../../redux/actions/contact';
import RenderComponents from '../RenderComponents';

const ContactList = () => {
  const { contact } = useSelector(state => state);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  const renderContactItems = () => {
    return contact.contacts.map(item => {
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
    <RenderComponents loading={contact.loading} error={contact.error}>
      <ul>
        {renderContactItems()}
      </ul>
    </RenderComponents>
  );
};

export default ContactList;