import { Item, DelButton } from './ContactItemStyle';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <Item>
      {name}: {number}
      <DelButton  type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DelButton >
    </Item>
  );
}