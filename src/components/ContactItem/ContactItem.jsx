import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      {' '}
      <p>
        {name} {number}
      </p>{' '}
      <button name={id} type="button" onClick={onDelete}>
        Delete
      </button>{' '}
    </li>
  );
};
ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
