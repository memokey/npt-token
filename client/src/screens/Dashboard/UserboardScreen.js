import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import HeaderUser from '../../components/Header/HeaderUser';

import BalanceStats from '../../components/Widgets/Stat/BalanceStats';
import TokenStats from '../../components/Widgets/Stat/TokenStats';
import BasicApexChart from '../../components/Widgets/CandleStick/BasicApexChart';
import MainLayout from '../../layouts/MainLayout';
import CurrencySetting from '../../components/Widgets/Table/CurrencySetting';
import NormalTable from '../../components/Widgets/Table/NormalTable';
import Box from '../../components/Common/Box';
import BasicApexRow from '../../components/Widgets/CandleStick/BasicApexRow';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';
import FormGroup from '../../components/Forms/FormGroup';

const UserboardScreen = () => {
  const [statsData, setStatsData] = useState({});
  const [balanceData, setBalanceData] = useState({});
  const [headers, setHeadersData] = useState([]);
  const [items, setItemsData] = useState({});
  const [total_data, setTotalData] = useState([]);
  const dispatch = useDispatch();
  const contract = useSelector((state) => state.contract);

  const [state, setState] = useState({series: [
    {
        name: "NPT BUY",
        data: []
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
    colors: ['var(--primary-color)']}});
  const [bought_data, setBoughtData] = useState([]);
  const [primaryTab, setPrimaryTab] = useState(0);
  const [formValues, setFormValues] = useState({
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handlePrimaryTab = (tabNum) => {
    setPrimaryTab(tabNum);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

  };
  useEffect(() => {
    const statsDataTemp = {
      ask: 1.00290,
      bid: 1.00346,
    };
    const total = [
        { category: 'NPT total supply', value: contract.mainBalance },
        { category: 'NPT total bought volume', value: 2456 },
        { category: 'NPT total sold volume', value: 2368 },
    ];
    const headers = ['Submit date&time', 'User', 'DOB', 'ID type', 'Status', 'Action'];
    const items = {
      'items': [
        ['23/12/2021 13:45', 'ezio', '04/06/1975', 'driving license', 'pending'],
        ['21/12/2019 13:48', 'hans', '04/06/1975', 'driving license', 'pending'],
      ],
      'actions': ['View']
    };
    setStatsData(statsDataTemp);
    setHeadersData(headers);
    setItemsData(items);
    setTotalData(total);

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
      const bought_data = [];
      setState(data);
      setBoughtData(bought_data);
      const balance = {
          npt: contract.balance,
          eur: 222213.5
      };
      setBalanceData(balance);
  }, []);

  return (
    <MainLayout>
      <div className='content'>
        <HeaderUser title='Dashboard' />
        <div className='flex flex-destroy'>
          <div className='content-30 flex-1' style={{height: 'fit-content'}}>
            <Box>
                <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
                    NPT
                </div>
                <div className='box-content'>
                    {statsData && (
                    <TokenStats
                        item={statsData}
                    />
                    )}
                    <div className='box-content'>
                        <div className='trade-history-row'>
                            <table>
                                <tbody>
                                    {total_data && total_data.map((item, index) => (
                                        <BasicApexRow key={index.toString()} item={item} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Box>
          </div>
          <div className='content-70' style={{height: 'fit-content'}}>
            <BasicApexChart data={state} extra_data={bought_data} title='Price chart' />
          </div>
        </div>
        <div className='flex flex-destroy'>
            <div className='content-50 flex-1' style={{height: 'fit-content'}}>
                <Box>
                    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
                        Wallet Balance
                    </div>
                    <div className='box-content'>
                        {balanceData && (
                        <BalanceStats
                            item={balanceData}
                        />
                        )}
                    </div>
                </Box> 
            </div>
            <div className='content-50' style={{height: 'fit-content', textAlign: 'center'}}>
            <Box>
                <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
                    Sell/Buy Neptune
                </div>
                <div className='box-horizontal-padding'>
                    <div className='tabs no-select'>
                    <button
                        type='button'
                        className={primaryTab === 0 ? 'active' : 'passive'}
                        onClick={() => handlePrimaryTab(0)}
                    >
                        Buy
                    </button>
                    <button
                        type='button'
                        className={primaryTab === 1 ? 'active' : 'passive'}
                        onClick={() => handlePrimaryTab(1)}
                    >
                        Sell
                    </button>
                    </div>

                    {primaryTab === 0 && (
                        <>
                            <form className='form form-fund' onSubmit={handleSubmit} noValidate>
                                <div className='form-elements'>
                                    <div className='form-line'>
                                        <div className='full-width' style={{display: 'inline-flex'}}>
                                            <label htmlFor='phone'>EUR amount</label>
                                            <FormInput
                                                type='text'
                                                name='phone'
                                                value={formValues.phone}
                                                placeholder='Enter EUR amount'
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-line'>
                                        <div className='full-width' style={{display: 'inline-flex'}}>
                                            <label htmlFor='password'>NPT amount</label>
                                            <FormGroup
                                                type='password'
                                                name='password'
                                                value={formValues.password}
                                                placeholder='NPT amount'
                                                onChange={handleChange}
                                                disabled={true}
                                                suffix="NPT"
                                            />
                                        </div>
                                    </div>
                                    <div className='form-line'>
                                        <div className='full-width' style={{display: 'inline-flex'}}>
                                            <label htmlFor='password1'>NPT price</label>
                                            <FormGroup
                                                type='password'
                                                name='password1'
                                                value={formValues.password1}
                                                placeholder='NPT price'
                                                onChange={handleChange}
                                                disabled={true}
                                                suffix="NPT"
                                            />
                                        </div>
                                    </div>
                                    <div className='form-line'>
                                        <div className='buttons'>
                                            <FormButton type='submit' text='Buy' onClick={handleSubmit} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </>
                    )}

                    {primaryTab === 1 && (
                        <>
                            <form className='form form-fund' onSubmit={handleSubmit} noValidate>
                                <div className='form-elements'>
                                    <div className='form-line'>
                                        <div className='full-width' style={{display: 'inline-flex'}}>
                                            <label htmlFor='phone'>NPT amount</label>
                                            <FormInput
                                                type='text'
                                                name='phone'
                                                value={formValues.phone}
                                                placeholder='Enter NPT amount'
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-line'>
                                        <div className='full-width' style={{display: 'inline-flex'}}>
                                            <label htmlFor='password'>EUR amount</label>
                                            <FormGroup
                                                type='password'
                                                name='password'
                                                value={formValues.password}
                                                placeholder='EUR amount'
                                                onChange={handleChange}
                                                disabled={true}
                                                suffix="NPT"
                                            />
                                        </div>
                                    </div>
                                    <div className='form-line'>
                                        <div className='full-width' style={{display: 'inline-flex'}}>
                                            <label htmlFor='password'>NPT price</label>
                                            <FormGroup
                                                type='password'
                                                name='password'
                                                value={formValues.password}
                                                placeholder='NPT price'
                                                onChange={handleChange}
                                                disabled={true}
                                                suffix="NPT"
                                            />
                                        </div>
                                    </div>
                                    <div className='form-line'>
                                        <div className='buttons'>
                                            <FormButton type='submit' text='Sell' onClick={handleSubmit} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </>
                    )}
                </div>
                </Box>
            </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserboardScreen;
