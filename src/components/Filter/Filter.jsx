import PropTypes from 'prop-types';

export const Filter = ({ filter, handleChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </label>
  );
};

Filter.propType = {
  filter: PropTypes.string.isRequired,
  HhandleChange: PropTypes.func.isRequired,
};
