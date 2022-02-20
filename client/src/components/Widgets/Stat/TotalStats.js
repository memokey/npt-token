import { memo } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

import Box from '../../Common/Box';

const TotalStats = memo(({ item }) => (
  <Box>
    <div className='box-content box-vertical-padding box-horizontal-padding responsive-hide2'>
      <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
        <div className='responsive-hide2'>
          <div className='icon cover' style={{ backgroundImage: `url('/images/coin/EURO.png')` }} />
        </div>
        <div className='responsive-hide2'>
          <h5>Balance</h5>
          <h4>
            <NumberFormat value={item.euro} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={''} />
          </h4>
        </div>
        <div className='divider responsive-hide2' />
        <div className='responsive-hide2'>
          <div className='icon cover' style={{ backgroundImage: `url('/images/coin/NAV.png')` }} />
        </div>
        <div className='responsive-hide2'>
          <h5>Balance</h5>
          <h4><NumberFormat value={item.token} displayType={'text'}  thousandSeparator="." decimalSeparator="," prefix={''} /></h4>
        </div>
        <div className='divider responsive-hide2' />
        <div className='responsive-hide2'>
            <Link to='#'>
                <i className='material-icons' style={{fontSize: 50, color: 'var(--primary-color)'}}>people_outline</i>
            </Link>
        </div>
        <div className='responsive-hide2'>
          <h5>Users</h5>
          <h4><NumberFormat value={item.members} displayType={'text'}  thousandSeparator="." decimalSeparator="," prefix={''} /></h4>
        </div>
        <div className='divider responsive-hide2' />
        <div className='responsive-hide2'>
            <h2>KYC</h2>
        </div>
        <div className='responsive-hide2'>
          <h5>Pending</h5>
          <h4><NumberFormat value={item.kyc} displayType={'text'}  thousandSeparator="." decimalSeparator="," prefix={''} /></h4>
        </div>
      </div>
    </div>
    <div className='box-content box-vertical-padding box-horizontal-padding responsive-show-block'>
      <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
        <div style={{width: '25%'}}>
          <div className='icon cover' style={{ backgroundImage: `url('/images/coin/EURO.png')` }} />
        </div>
        <div style={{width: '30%'}}>
            <h5>Balance: </h5>
        </div>
        <div style={{width: '45%'}}>
          <h4><NumberFormat value={item.euro} displayType={'text'}  thousandSeparator="." decimalSeparator="," prefix={''} /></h4>
        </div>
      </div>
    </div>
    <div className='box-content box-vertical-padding box-horizontal-padding responsive-show-block'>
      <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
        <div style={{width: '25%'}}>
          <div className='icon cover' style={{ backgroundImage: `url('/images/coin/NAV.png')` }} />
        </div>
        <div style={{width: '30%'}}>
        <h5>Balance: </h5>
        </div>
        <div style={{width: '45%'}}>
          <h4><NumberFormat value={item.token} displayType={'text'}  thousandSeparator="." decimalSeparator="," prefix={''} /></h4>
        </div>
      </div>
    </div>
    <div className='box-content box-vertical-padding box-horizontal-padding responsive-show-block'>
      <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
        <div style={{width: '25%'}}>
          <i className='material-icons' style={{fontSize: 50, color: 'var(--primary-color)'}}>people_outline</i>
        </div>
        <div style={{width: '30%'}}>
        <h5>Users: </h5>
        </div>
        <div style={{width: '45%'}}>
          <h4><NumberFormat value={item.members} displayType={'text'}  thousandSeparator="." decimalSeparator="," prefix={''} /></h4>
        </div>
      </div>
    </div>
    <div className='box-content box-vertical-padding box-horizontal-padding responsive-show-block'>
      <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
        <div style={{width: '25%'}}>
          <h2>KYC</h2>
        </div>
        <div style={{width: '30%'}}>
          <h5>Pending: </h5>
        </div>
        <div style={{width: '45%'}}>
          <h4><NumberFormat value={item.kyc} displayType={'text'}  thousandSeparator="." decimalSeparator="," prefix={''} /></h4>
        </div>
      </div>
    </div>
  </Box>
));

TotalStats.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default TotalStats;
