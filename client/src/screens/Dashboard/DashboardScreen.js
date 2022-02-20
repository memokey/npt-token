import React,{ useState, useEffect } from 'react';

import Header from '../../components/Header/Header';

import TotalStats from '../../components/Widgets/Stat/TotalStats';
import BasicApexChart from '../../components/Widgets/CandleStick/BasicApexChart';
import SiteLayout from '../../layouts/SiteLayout';
import CurrencySetting from '../../components/Widgets/Table/CurrencySetting';
import NormalTable from '../../components/Widgets/Table/NormalTable';
import ICODataTable from '../../components/Widgets/Table/ICODataTable';
import BalanceStats from '../../components/Widgets/Stat/BalanceStats';
import { Link } from 'react-router-dom';

const DashboardScreen = () => {
  const [statsData, setStatsData] = useState(null);
  const [headers, setHeadersData] = useState([]);
  const [items, setItemsData] = useState({});
  const [state, setState] = useState(null);
  const [bought_data, setBoughtData] = useState([]);
  const [balanceData, setBalanceData] = useState(null);

  useEffect(() => {
    const statsData = {
      euro: 34395.203,
      token: 49930000,
      members: 873,
      kyc: 10
    };
    const headers = [
      {name: 'Submit date&time', selector: row => row.datetime},
      {name: 'User', selector: row => row.user},
      {name: 'DOB', selector: row => row.dob},
      {name: 'ID type', selector: row => row.idtype},
      {name: 'Status', selector: row => row.status},
      {name: 'Action', selector: row => row.action}
    ];
    const items = [
      {
        id: 1,
        datetime: '12/12/2009',
        user: 'ezio',
        dob: '04/04/1911',
        idtype: 'driver license',
        status: 'pending',
        action: <Link to="#">View</Link>
      },
      {
        id: 2,
        datetime: '12/12/2009',
        user: 'ezio',
        dob: '04/04/1911',
        idtype: 'driver license',
        status: 'pending',
        action: <Link to="#">View</Link>
      },
      {
        id: 3,
        datetime: '12/12/2009',
        user: 'ezio',
        dob: '04/04/1911',
        idtype: 'driver license',
        status: 'pending',
        action: <Link to="#">View</Link>
      },
    ];
    setStatsData(statsData);
    setHeadersData(headers);
    setItemsData(items);
    const data = {
      series: [
        {
            name: "NPT BUY",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
      ],
      options: {
        chart: {
            height: 300,
            type: 'line',
            foreColor: '#373d3f',
            zoom: {
              enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['var(--primary-color)', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.1
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        colors: ['var(--primary-color)']
      },
    };
    const bought_data = [
      {
          category: 'NPT total bought volume',
          value: '2347'
      },
      {
          category: 'NPT buy price',
          value: '2347'
      },
      {
          category: 'NPT total bought value',
          value: '2347'
      },
    ];
    setState(data);
    setBoughtData(bought_data);
    const balance = {
      npt: 20102.034,
      eur: 222213.5
    };
    setBalanceData(balance);
  }, []);

  return (
    <SiteLayout>
      <div className='content'>
        <Header title='Dashboard' />
        <div className='flex flex-destroy'>
          <div className='content-100 flex-1'>
            {statsData && (
              <TotalStats
                item={statsData}
              />
            )}

            <div className='flex flex-destroy'>
              <div className='content-50 flex-1 box-right-padding'>
                <BasicApexChart data={state} extra_data={bought_data} title="NPT BUY" />
              </div>
              <div className='content-50 flex-1 box-right-padding'>
                <BasicApexChart data={state} extra_data={bought_data} title="NPT SELL" />
              </div>
            </div>

            <div className='flex flex-destroy'>
              <div className='flex-1 content-30 box-right-padding'>
                <CurrencySetting />
              </div>
              <div className='content-70'>{
                (items.length)?<ICODataTable title={'KYC pending'} columns={headers} data={items} />:''
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default DashboardScreen;
