import PropTypes from 'prop-types';
import { Container } from './ContactListItem.styled';
import { remove } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(contact.id);
    dispatch(remove(contact.id));
  };

  return (
    <Container>
      <p>
        {contact.name}:<span>{contact.number}</span>
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </Container>
  );
};

export default ContactListItem;

ContactListItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
