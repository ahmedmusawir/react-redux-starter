import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputGroup = (props) => {
  const {
    type, name, className, placeholder, value, onChange, error,
  } = props;
  return (
    <div>
      <input
        name={name}
        type={type}
        className={classnames('form-control form-control-lg mb-2', {
          'is-invalid': error,
        })}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <aside className="invalid-feedback pb-2">{error}</aside>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
InputGroup.defaultProps = {
  type: 'text',
};
export default InputGroup;
