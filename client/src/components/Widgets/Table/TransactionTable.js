import React,{ memo} from 'react';

import PropTypes from 'prop-types';


const TransactionTable = memo(({items}) => {

  return (
    <table>
        <tbody>
            {items.map((item, index) => (
                <tr key={index.toString()}><td style={{width: 100}}>{item.name}</td><td>{item.value}</td></tr>
            ))}
        </tbody>
    </table>
  );
});
TransactionTable.propTypes = {
    items: PropTypes.array.isRequired,
};

export default TransactionTable;
