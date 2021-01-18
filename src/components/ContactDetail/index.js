import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAction } from '../../redux/actions/contact';
import RenderComponents from '../RenderComponents';

const ContactDetail = () => {
  const { contact } = useSelector(state => state);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  const renderContactDetail = () => {
    const user = contact.contacts.find(item => item.login.username === params.username);
    const { picture, name, location, email, phone, cell } = user;
    return (
      <div>
        <img src={picture.large} alt={name.first} />
        <p>{name.title}. {name.first} {name.last}</p>
        <p>{location.street.number} {location.street.name}, {location.city}, {location.state}, {location.country}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{cell}</p>
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
    <RenderComponents loading={contact.loading} error={contact.error}>
      {contact.contacts.length > 0 ? renderContactDetail() : renderNoContactFound()}
    </RenderComponents>
  )
}

export default ContactDetail;