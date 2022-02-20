import { memo } from 'react';
import PropTypes from 'prop-types';

const FormGroup = memo(({ type, name, value, placeholder, onChange, disabled, suffix }) => (
    <div className="input-group">
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            autoComplete='off'
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
        />
        <span className="input-group-addon">{suffix}</span>
    </div>
  
));

FormGroup.defaultProps = {
  value: '',
};

FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired,
};

export default FormGroup;
