import React,{ memo, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Box from '../../Common/Box';
import CurrencySettingRow from './CurrencySettingRow';

const CurrencySetting = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        category: 'Deposit fee',
        value: '0'
      },
      {
        id: 2,
        category: 'Withdraw fee',
        value: '0'
      },
      {
        id: 3,
        category: 'Minimum withdraw fee',
        value: '0'
      },
      {
        id: 4,
        category: 'Sell price',
        value: '0'
      },
      {
        id: 5,
        category: 'Buy Spread',
        value: '0'
      },
      {
        id: 6,
        category: 'Withdraw limit in 24hr',
        value: '0'
      },
      {
        id: 7,
        category: 'Minimum buy/sell value',
        value: '0'
      },
      {
        id: 8,
        category: 'Minimum deposit limit',
        value: '0'
      },
    ];

    setData(dataArray);
  }, []);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        Currency Settings
      </div>
      <div className='box-content box-content-height'>
        <div className='trade-history-row'>
          {data && data.length > 0 && (
            <table>
              <tbody>
                {data.map((item) => (
                  <CurrencySettingRow key={'currency_setting'+item.id.toString()} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className='box-button box-vertical-padding box-horizontal-padding'>
        <Link to='/market' className='button button-purple button-medium button-block'>
                    Edit
          <i className='material-icons button-icon-right'>chevron_right</i>
        </Link>
      </div>
    </Box>
  );
});

export default CurrencySetting;
