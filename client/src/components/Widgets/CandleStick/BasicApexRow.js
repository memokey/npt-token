import { memo } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const BasicApexRow = memo(({ item }) => (
  <tr>
    <td className='left'>
      <h6>{item.category}</h6>
    </td>
    <td className='right'><h6><NumberFormat value={item.value} displayType={'text'}  thousandSeparator="," decimalSeparator="." prefix={''} /></h6></td>
  </tr>
));

BasicApexRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default BasicApexRow;
