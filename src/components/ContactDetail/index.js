import React from 'react';
import { useParams } from 'react-router-dom';
import contactsMock from '../ContactList/mock_user_api.json';

const ContactDetail = () => {
  const params = useParams();

  const renderContactDetail = () => {
    const contactInfo = contactsMock.results.find(item => item.login.username === params.username);
    const { picture, name, location, email, phone, cell } = contactInfo;
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

  return (
    <React.Fragment>
      {renderContactDetail()}
    </React.Fragment>
  )
}

export default ContactDetail;