import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAction } from '../../redux/actions/contact';
import { setPageNameAction } from '../../redux/actions/page';
import RenderComponents from '../RenderComponents';
import './index.scss';

const ContactDetail = () => {
  const [user, setUser] = useState(undefined);
  const { contact } = useSelector(state => state);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageNameAction('Detail'));
    dispatch(fetchAction());
    const findUser = contact.contacts.find(item => item.login.username === params.username);
    if (findUser) setUser(findUser);
  }, [dispatch, contact.contacts, params.username]);

  const renderContactDetail = () => {
    const { picture, name, location, email, phone } = user;
    return (
      <div className="contact-detail">
        <img src={picture.large} alt={name.first} />
        <p className="detail-name">{name.title}. {name.first} {name.last}</p>
        <p className="detail-location">{location.street.number} {location.street.name}, {location.city}, {location.state}, {location.country}</p>
        <p className="detail-email">{email}</p>
        <p className="detail-phone">{phone}</p>
      </div>
    )
  }

  const renderNoContactFound = () => {
    return (
      <div>
        <p>Contact not found - Invalid username: {params.username}</p>
      </div>
    )
  }

  return (
    <div className="contact-detail-page">
      <RenderComponents loading={contact.loading} error={contact.error}>
        {user ? renderContactDetail() : renderNoContactFound()}
      </RenderComponents>
      <div className="contact-detail-home-link">
      <Link to="/">Back to List Page</Link>
      </div>
    </div>
  )
}

export default ContactDetail;