import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/selectors';
import { setFilter } from '../redux/filterSlice';

export const SearchFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Search contacts by name"
    />
  );
};
