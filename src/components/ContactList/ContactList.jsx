import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.contactListItem}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
