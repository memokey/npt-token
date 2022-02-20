import { memo } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const TokenStats = memo(({ item }) => (
  <div className='box-content box-vertical-padding box-horizontal-padding'>
    <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap' style={{paddingBottom: 58}}>
      <div>
        <div className='icon cover' style={{ backgroundImage: `url('/images/coin/NAV.png')` }} />
      </div>
      <div>
        <h5>Ask / Bid</h5>
        <h4><NumberFormat value={item.ask} displayType={'text'}  thousandSeparator="," decimalSeparator="." prefix={''} />&nbsp;/&nbsp;<NumberFormat value={item.bid} displayType={'text'}  thousandSeparator="," decimalSeparator="." prefix={''} /></h4>
      </div>
    </div>
  </div>
));

TokenStats.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TokenStats;
