import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAction } from '../../redux/actions/contact';
import { setPageNameAction } from '../../redux/actions/page';
import RenderComponents from '../RenderComponents';
import './index.scss';

const ContactList = () => {
  const { contact } = useSelector(state => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setPageNameAction('List'));
    dispatch(fetchAction());
  }, [dispatch]);

  const renderContactItems = () => {
    if (contact.contacts) {
      return contact.contacts.map(item => {
        return (
          <Link to={`/${item.login.username}`} key={item.login.username} className="contact-link">
            <div className="contact-list-item">
              <img src={item.picture.thumbnail} alt={item.name.first} />
              <span className="contact-name">{item.name.first} {item.name.last}</span>
            </div>
          </Link>
        );
      });
    }
  }

  return (
    <div className="contact-list-page">
      <RenderComponents error={contact && contact.error}>
        <div className="contact-list">
          {renderContactItems()}
        </div>
      </RenderComponents>
    </div>
  );
};

export default ContactList;