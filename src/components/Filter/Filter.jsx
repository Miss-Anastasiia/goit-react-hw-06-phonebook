import { FilterBox, FilterInput } from './FilterStyled'
import { FormLabel } from '../ContactForm/ContactFormStyled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(filterContacts(evt.target.value));
  };
  return (
   <FilterBox>
      <FormLabel htmlFor="filter">Find contacts by name</FormLabel>
      <div>
        <FilterInput
          type="text"
          name="filter"
          onChange={onChange}
        />
      </div>
    </FilterBox>
  );
}