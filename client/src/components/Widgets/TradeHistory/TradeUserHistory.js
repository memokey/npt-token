import { memo, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Box from '../../Common/Box';
import TradeUserHistoryRow from './TradeUserHistoryRow';

const TradeUserHistory = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        datetime: '06:22:15',
        nptprice: '1.04050',
        paidamount: '0.003NPT',
        receivedamount: '350€',
        status: 'pending',
        op: 0
      },
      {
        id: 2,
        datetime: '06:22:15',
        nptprice: '1.04050',
        paidamount: '0.003NPT',
        receivedamount: '350€',
        status: 'pending',
        op: 0
      },
      {
        id: 3,
        datetime: '06:22:15',
        nptprice: '1.04050',
        paidamount: '350€',
        receivedamount: '0.003NPT',
        status: 'pending',
        op: 1
      },
      {
        id: 4,
        datetime: '06:22:15',
        nptprice: '1.04050',
        paidamount: '0.003NPT',
        receivedamount: '350€',
        status: 'pending',
        op: 0
      },
      {
        id: 5,
        datetime: '06:22:15',
        nptprice: '1.04050',
        paidamount: '0.003NPT',
        receivedamount: '350€',
        status: 'pending',
        op: 0
      },
      {
        id: 6,
        datetime: '06:22:15',
        nptprice: '1.04050',
        paidamount: '350€',
        receivedamount: '0.003NPT',
        status: 'pending',
        op: 1
      },
      {
        id: 7,
        datetime: '06:22:15',
        nptprice: '1.04050',
        paidamount: '350€',
        receivedamount: '0.003NPT',
        status: 'pending',
        op: 1
      },
      {
        id: 8,
        datetime: '06:22:15',
        nptprice: '1.04050',
        paidamount: '350€',
        receivedamount: '0.003NPT',
        status: 'pending',
        op: 1
      },
      {
        id: 9,
        datetime: '06:22:15',
        nptprice: '1.04050',
        paidamount: '0.003NPT',
        receivedamount: '350€',
        status: 'pending',
        op: 0
      },
    ];

    setData(dataArray);
  }, []);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        Trade history
      </div>
      <div className='box-content box-content-height'>
        <div className='trade-history-row'>
          {data && data.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th className='left no-select'>Operation</th>
                  <th className='left no-select'>Submit date&time</th>
                  <th className='left no-select'>NPT price</th>
                  <th className='left no-select'>Paid amount</th>
                  <th className='left no-select'>Received amount</th>
                  <th className='left no-select'>Status</th>
                  <th className='left no-select'>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <TradeUserHistoryRow key={item.id.toString()} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Box>
  );
});

export default TradeUserHistory;
