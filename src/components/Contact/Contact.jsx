import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";


const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <ul className={styles.fieldInfo}>
        <li>
          <FaUser />
          <span className={styles.name}>{name}</span>
        </li>

        <li>
          <FaPhone />
          <span className={styles.number}>{number}</span>
        </li>
      </ul>

      <button className={styles.delButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
