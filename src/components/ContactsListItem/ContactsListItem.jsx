import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactsListItem.styled';

const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ContactItem key={id}>
      <ContactName>
        {name[0].toUpperCase() + name.substring(1)}:
        <ContactNumber>{number}</ContactNumber>
      </ContactName>
      <Button onClick={() => deleteContact(id)}>Delete</Button>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
