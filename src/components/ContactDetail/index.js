import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAction, setFailAction } from '../../redux/actions/contact';
import { setPageNameAction } from '../../redux/actions/page';
import RenderComponents from '../RenderComponents';
import { fetchContactData } from '../../helpers/api';
import './index.scss';

const ContactDetail = () => {
  const [user, setUser] = useState(undefined);
  const { contact } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchContactData();
        const findUser = response.results.find(item => '/' + item.login.username === window.location.pathname);
        if (findUser) setUser(findUser);
        dispatch(setAction(response.contacts));
      } catch (err) {
        dispatch(setFailAction(err.message));
      }
    }
    fetchData();
    dispatch(setPageNameAction('Detail'));
  }, [dispatch]);

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
      <div className="contact-not-found">
        <p>Contact not found - Invalid username</p>
      </div>
    )
  }

  return (
    <div className="contact-detail-page">
      <RenderComponents error={contact && contact.error}>
        {user ? renderContactDetail() : renderNoContactFound()}
      </RenderComponents>
      <div className="contact-detail-home-link">
      <Link to="/">Back to List Page</Link>
      </div>
    </div>
  )
}

export default ContactDetail;