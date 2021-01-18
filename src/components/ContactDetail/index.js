import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ContactDetail = () => {
  const { contacts } = useSelector(state => state.contact);
  const params = useParams();

  const renderContactDetail = () => {
    const user = contacts.find(item => item.login.username === params.username);
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
    <React.Fragment>
      {contacts.length > 0 ? renderContactDetail() : renderNoContactFound()}
    </React.Fragment>
  )
}

export default ContactDetail;