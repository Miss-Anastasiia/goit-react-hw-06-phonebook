import { useState } from 'react';
import { Formik } from 'formik';
import { MainForm, AddButton, FormLabel, Input } from './ContactFormStyled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/slice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleNameChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      setName('');
       }else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts`);
      setNumber('');
    } else {
      dispatch(addContact(name, number));
      reset();
    }
     
  };

  return (
     <Formik initialValues={{ setName: '', setNumber: '' }} onSubmit={handleSubmit}>
    <MainForm autoComplete="off">
      <FormLabel>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNameChange}
        />
      </FormLabel>
      <AddButton type="submit">Add contact</AddButton>
      </MainForm>
    </Formik>
  );
};