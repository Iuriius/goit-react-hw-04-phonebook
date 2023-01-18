import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactsListItem';
import { ContactUl } from './ContactsList.styled';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ContactUl>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ContactUl>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
