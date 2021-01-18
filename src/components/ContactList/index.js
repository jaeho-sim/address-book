import React, { useEffect, useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContactData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10&seed=fa68f06333af18b7');
    const contactsData = await response.json();
    console.log(contactsData);
    setContacts(contactsData.results);
  }

  useEffect(() => {
    fetchContactData();
  }, []);

    const renderContactItems = () => {
      return contacts.map(item => {
        return (
          <li key={item.login.username}>
            <img src={item.picture.thumbnail} alt={item.name.first} />
            <span>{item.name.first} {item.name.last}</span>
          </li>
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