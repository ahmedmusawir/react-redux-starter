import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputTextarea = (props) => {
  const {
    name, placeholder, value, onChange, error,
  } = props;
  const compStyle = {
    height: '300px',
  };
  return (
    <div>
      <textarea
        name={name}
        className={classnames('form-control form-control-lg mb-2', {
          'is-invalid': error,
        })}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={compStyle}
      />
      {error && <aside className="invalid-feedback pb-2">{error}</aside>}
    </div>
  );
};

// InputTextarea.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   error: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };

export default InputTextarea;
