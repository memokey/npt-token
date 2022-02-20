import { memo } from 'react';
import PropTypes from 'prop-types';

const FormTextArea = memo(({ type, name, value, placeholder, onChange, disabled }) => (
  <textarea
    id={name}
    name={name}
    type={type}
    value={value}
    autoComplete='off'
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
  />
));

FormTextArea.defaultProps = {
  value: '',
};

FormTextArea.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormTextArea;
