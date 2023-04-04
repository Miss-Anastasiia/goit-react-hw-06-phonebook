import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
import { getContacts } from 'redux/slice';
import { List } from './ContactListStyled';

const getVisibleContacts = (contacts, filterValue) => {
  const filterNormalize = filterValue.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormalize)
  );
};

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const list = getVisibleContacts(contacts, filter);

  return (
      <List>
      {list.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
        />
      ))}
    </List>
  );
}
