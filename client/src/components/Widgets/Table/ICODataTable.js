
import React,{ memo} from 'react';

import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import Box from '../../Common/Box';

const ExpandedComponent = ({ data }) => {
  delete data.id;
  let arr = [];
  Object.keys(data).forEach((key) => {
    arr.push(key);
  });
  return(<ul className="dtr-details" style={{padding: '10px'}}>{arr.map((key) => (
    <li style={{verticalAlign: 'baseline'}}><span className="dtr-title">{key}: </span> <span className="dtr-data">{data[key]}</span></li>
  ))}</ul>)
};
const ICODataTable = memo(({title, columns, data}) => {
  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        {title}
      </div>
      <div className='box-content box-content-height'>
        <div className='trade-history-row'>
        <DataTable
            columns={columns}
            data={data}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
        </div>
      </div>
    </Box>
  );
});
ICODataTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
};

export default ICODataTable;
