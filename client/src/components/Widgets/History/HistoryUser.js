import React,{ memo, useState, useEffect } from 'react';

import Box from '../../Common/Box';

import TransactionTable from '../Table/TransactionTable';
import NormalTable from '../Table/NormalTable';
import TradeUserHistory from '../TradeHistory/TradeUserHistory';

const HistoryUser = memo(() => {
  const [primaryTab, setPrimaryTab] = useState(0);
  const [secondaryTab, setSecondaryTab] = useState(0);
  const [dep_npt_items, setDEPNPTItem] = useState([]);
  const [dep_eur_headers, setDEPEURHeadersData] = useState([]);
  const [dep_eur_items, setDEPEURItemsData] = useState([]);
  const [wtd_npt_headers, setWTDNPTHeadersData] = useState([]);
  const [wtd_npt_items, setWTDNPTItemsData] = useState([]);
  const [wtd_eur_headers, setWTDEURHeadersData] = useState([]);
  const [wtd_eur_items, setWTDEURItemsData] = useState([]);

  const handlePrimaryTab = (tabNum) => {
    setPrimaryTab(tabNum);

    setSecondaryTab(0);
  };

  const handleSecondaryTab = (tabNum) => {
    setSecondaryTab(tabNum);
  };
  useEffect(() => {
    const depnpt = [
        [
            { name: 'tx hash', value: '67496494696496494949339357583' },
            { name: 'sender', value: '0x5486890906457899' },
            { name: 'recipient', value: '0x5486890906457899' },
            { name: 'amount', value: '0.124356 NPT' },
            { name: 'date time', value: '28/12/2021 13:45' },
        ],
        [
            { name: 'tx hash', value: '67496494696496494949339357583' },
            { name: 'sender', value: '0x5486890906457899' },
            { name: 'recipient', value: '0x5486890906457899' },
            { name: 'amount', value: '0.124356 NPT' },
            { name: 'date time', value: '28/12/2021 13:45' },
        ],
        [
            { name: 'tx hash', value: '67496494696496494949339357583' },
            { name: 'sender', value: '0x5486890906457899' },
            { name: 'recipient', value: '0x5486890906457899' },
            { name: 'amount', value: '0.124356 NPT' },
            { name: 'date time', value: '28/12/2021 13:45' },
        ],
    ];
    let headers = ['Submit date&time', 'Payment method', 'Payment ID', 'Amount', 'Fee', 'Status', 'Action'];
    let items = {
      'items': [
        ['23/12/2021 13:45', 'paypal', 'tok_1K9pEDAjR6DfcchLvTj80a0U', '50', '1', 'pending'],
        ['23/12/2021 13:45', 'ALFA BANK', 'tok_1K9pEDAjR6DfcchLvTj8332U', '50', '1', 'pending'],
      ],
      'actions': ['View']
    };
    setDEPEURHeadersData(headers);
    setDEPEURItemsData(items);
    setDEPNPTItem(depnpt);
    headers = ['Submit date&time', 'Withdraw address', 'Requested withdraw amount', 'Withdraw fee', 'Total deducted amount', 'Status', 'Action'];
    items = {
      'items': [
        ['23/12/2021 13:45', '0x6540878656776', '1.04050', '0.003', '1.04350', 'pending'],
        ['23/12/2021 13:46', '0x6540878656778', '1.04050', '0.003', '1.04350', 'pending'],
      ],
      'actions': ['View']
    };
    setWTDNPTHeadersData(headers);
    setWTDNPTItemsData(items);
    headers = ['Submit date&time', 'Requested withdraw amount', 'Withdraw fee', 'Total deducted amount', 'Status', 'Action'];
    items = {
      'items': [
        ['23/12/2021 13:45', '1.04050', '0.003', '1.04350', 'pending'],
        ['23/12/2021 13:46', '1.04050', '0.003', '1.04350', 'pending'],
      ],
      'actions': ['View']
    };
    setWTDEURHeadersData(headers);
    setWTDEURItemsData(items);
    
  },[]);
  
  return (
    <Box>
      <div className='box-horizontal-padding box-content-height-nobutton'>
        <div className='tabs no-select'>
          <button
            type='button'
            className={primaryTab === 0 ? 'active' : 'passive'}
            onClick={() => handlePrimaryTab(0)}
          >
            Deposit history
          </button>
          <button
            type='button'
            className={primaryTab === 1 ? 'active' : 'passive'}
            onClick={() => handlePrimaryTab(1)}
          >
            Withdraw history
          </button>
          <button
            type='button'
            className={primaryTab === 2 ? 'active' : 'passive'}
            onClick={() => handlePrimaryTab(2)}
          >
            Trade history
          </button>
        </div>

        {primaryTab === 0 && (
          <>
            <div className='secondary-tabs flex flex-left no-select'>
              <button
                type='button'
                className={secondaryTab === 0 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(0)}
              >
                NPT
              </button>
              <button
                type='button'
                className={secondaryTab === 1 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(1)}
              >
                EUR
              </button>
            </div>

            {secondaryTab === 0 && (
              <>
                {dep_npt_items.map((item, index) => (
                    <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                        <TransactionTable key={index} items={item} />
                    </div>
                ))}
              </>
            )}

            {secondaryTab === 1 && (
              <>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                    <NormalTable title={'EUR deposit history'} headers={dep_eur_headers} items={dep_eur_items} />
                </div>
              </>
            )}

            {secondaryTab === 2 && <p>test</p>}
          </>
        )}

        {primaryTab === 1 && (
          <>
            <div className='secondary-tabs flex flex-left no-select'>
              <button
                type='button'
                className={secondaryTab === 0 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(0)}
              >
                NPT
              </button>
              <button
                type='button'
                className={secondaryTab === 1 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(1)}
              >
                EUR
              </button>
            </div>

            {secondaryTab === 0 && (
              <>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                    <NormalTable title={'NPT withdraw history'} headers={wtd_npt_headers} items={wtd_npt_items} />
                </div>
              </>
            )}

            {secondaryTab === 1 && (
                <>
                    <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                        <NormalTable title={'EUR withdraw history'} headers={wtd_eur_headers} items={wtd_eur_items} />
                    </div>
                </>
            )}
          </>
        )}

        {primaryTab === 2 && (
          <>
            <div className='secondary-tabs flex flex-left no-select'>
              <button
                type='button'
                className={secondaryTab === 0 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(0)}
              >
                Buy
              </button>
              <button
                type='button'
                className={secondaryTab === 1 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(1)}
              >
                Sell
              </button>
              <button
                type='button'
                className={secondaryTab === 2 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(2)}
              >
                Both
              </button>
            </div>

            {secondaryTab === 0 && (
              <>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                    <TradeUserHistory />
                </div>
              </>
            )}

            {secondaryTab === 1 && (
                <>
                    <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                        <TradeUserHistory />
                    </div>
                </>
            )}

            {secondaryTab === 2 && (
                <>
                    <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                        <TradeUserHistory />
                    </div>
                </>
            )}
          </>
        )}
      </div>
    </Box>
  );
});

export default HistoryUser;
