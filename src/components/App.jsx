import {ContactForm}  from './ContactForm/ContactForm';
import  {ContactList}  from './ContactList/ContactList';
import  {Filter}  from './Filter/Filter';
import { Container, TitlePhoneBook, TitleContacts } from './AppStyled';

export const App = () => {
  return (
    <Container>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter  />
      <ContactList/>
    </Container>
  );
};

