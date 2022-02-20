import React,{ memo } from 'react';
import PropTypes from 'prop-types';

const CurrencySettingRow = memo(({ item }) => (
  <tr>
    <td className='left'>
      {item.category}
    </td>
    <td className='center'>{item.value}</td>
  </tr>
));

CurrencySettingRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default CurrencySettingRow;
