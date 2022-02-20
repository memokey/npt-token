import React,{ memo} from 'react';

import PropTypes from 'prop-types';

import Box from '../../Common/Box';
import NormalTableRow from './NormalTableRow';

const NormalTable = memo(({title, headers, items}) => {

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        {title}
      </div>
      <div className='box-content box-content-height'>
        <div className='trade-history-row'>
          {items && items.items.length > 0 && (
            <table>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index.toString()}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.items.map((item, index) => (
                        <NormalTableRow key={'kyc'+index.toString()} item={item} actions={items.actions} />
                    ))}
                </tbody>
            </table>
          )}
        </div>
      </div>
    </Box>
  );
});
NormalTable.propTypes = {
    items: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    headers: PropTypes.array.isRequired,
};

export default NormalTable;
