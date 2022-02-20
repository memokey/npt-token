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

const CurrencyScreen = () => {
  // const [statsData, setStatsData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  };
  useEffect(() => {

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
                </div>
            </Box>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CurrencyScreen;
