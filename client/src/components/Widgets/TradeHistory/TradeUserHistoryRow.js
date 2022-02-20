import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TradeUserHistoryRow = memo(({ item }) => (
  <tr>
    <td className='left'>
      <div className={item.op === 1 ? 'operation green' : 'operation red'}><i className="material-icons">{item.op === 1 ? 'arrow_downward' : 'arrow_upward'}</i></div>
    </td>
    <td className='left'>{item.datetime}</td>
    <td className='left'>{item.nptprice}</td>
    <td className='left'>{item.paidamount}</td>
    <td className='left'>{item.receivedamount}</td>
    <td className='left'>{item.status}</td>
    <td className='left'><Link to="#">View</Link></td>
  </tr>
));

TradeUserHistoryRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default TradeUserHistoryRow;
