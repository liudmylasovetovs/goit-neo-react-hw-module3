import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./contacts.json";

import { useState } from "react";

import "./App.css";

// const initial_contacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  //   return (
  //     JSON.parse(window.localStorage.getItem("contacts")) ?? initial_contacts
  //   );
  // });

    // useEffect(() => {
    // window.localStorage.setItem("contacts", JSON.stringify(contacts));
    // }, [contacts]);
  
  
  
  const addContact = (newContact) => {
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  // const onChangeFilter = (e) => {
  //   setFilter(e.target.value);
  // };

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (

  <div>
    <h1>Phonebook</h1>
    <ContactForm addContact={addContact}/>
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList
        contacts={getContacts()}
        onDelete={deleteContact}
      />
    </div>
  );
};

export default App;
