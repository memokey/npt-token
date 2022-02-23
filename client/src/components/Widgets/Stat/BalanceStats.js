import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

import FormInput from '../../../components/Forms/FormInput';
import Box from '../../Common/Box';
import {config} from '../../../config';

const BalanceStats = memo(({ item }) => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    tokenAmount: '0',
    euroAmount: '0',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleTokenSubmit = async (type) => {
    const res = await window.tokenContract.methods.transfer('0xC9204D2f0641660f510D8Adc47c42CCf3c1e80F1', 1000)
      .send({
        from: "0x37f69272285b127dD44d394E8D79D72884660d52"
      });
    console.log(res);
    return;
    window.personalContract.methods.transfer(config.walletAddress, formValues.tokenAmount).call()
      .then((res) => {
        if(res === true)
          alert(res);
          // dispatch(transformToken(type));
      })
  };
  const handleEuroSubmit = async (type) => {
    alert(type);
  };

  return (
      <div style={{display: "inline-flex"}}>
        <div className='box-content box-vertical-padding box-horizontal-padding'>
          <form className='form' noValidate>
            <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
              <div style={{width: '32%', textAlign: 'center'}}>
                <div className='icon cover' style={{ backgroundImage: `url('/images/coin/NAV.png')` }} />
              </div>
              <div style={{width: '68%', textAlign: 'center'}}>
                <h4><NumberFormat value={item.npt} displayType={'text'}  thousandSeparator="," decimalSeparator="." prefix={''} /></h4>
              </div>
            </div>
            <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
              <div className='form-line'>
                  <div className='form-elements'>
                      <div className='form-line'>
                          <div className='full-width' style={{padding: "25px 10px 0px 10px"}}>
                              <FormInput
                                  type='number'
                                  name='tokenAmount'
                                  value={formValues.tokenAmount}
                                  placeholder='Enter EUR amount'
                                  onChange={handleChange}
                              />
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap' style={{padding: "0px 20px"}}>
              <div style={{width: '50%', textAlign: 'center'}}>
                <div className='form-line'>
                  <button type="button" onClick={()=>{handleTokenSubmit(0)}} className="button button-purple button-medium button-block resposive-hide"><i className="material-icons">add_to_queue</i>&nbsp;<span className="responsive-hide">Deposit</span></button>
                </div>
              </div>
              <div style={{width: '50%', textAlign: 'center'}}>
                  <button type="button" onClick={()=>{handleTokenSubmit(1)}} className="button button-purple button-medium button-block"><i className="material-icons">remove_from_queue</i>&nbsp;<span className="responsive-hide">Withdraw</span></button>
              </div>
            </div>
          </form>
        </div>
        <div className='box-content box-vertical-padding box-horizontal-padding'>
          <form className='form' onSubmit={handleEuroSubmit} noValidate>
            <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
              <div style={{width: '32%', textAlign: 'center'}}>
                <div className='icon cover' style={{ backgroundImage: `url('/images/coin/EURO.png')` }} />
              </div>
              <div style={{width: '68%', textAlign: 'center'}}>
                <h4><NumberFormat value={item.npt} displayType={'text'}  thousandSeparator="," decimalSeparator="." prefix={''} /></h4>
              </div>
            </div>
            <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
              <div className='form-line'>
                  <div className='form-elements'>
                      <div className='form-line'>
                          <div className='full-width' style={{padding: "25px 0px 0px 10px"}}>
                              <FormInput
                                  type='number'
                                  name='euroAmount'
                                  value={formValues.euroAmount}
                                  placeholder='Enter EUR amount'
                                  onChange={handleChange}
                              />
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap' style={{padding: "0px 20px"}}>
              <div style={{width: '50%', textAlign: 'center'}}>
                <div className='form-line'>
                  <button type="submit" style={{width: "100% !important"}} className="button button-purple button-medium button-block resposive-hide"><i className="material-icons">add_to_queue</i>&nbsp;<span className="responsive-hide">Deposit</span></button>
                </div>
              </div>
              <div style={{width: '50%', textAlign: 'center'}}>
                  <button type="submit" className="button button-purple button-medium button-block"><i className="material-icons">remove_from_queue</i>&nbsp;<span className="responsive-hide">Withdraw</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  })

BalanceStats.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default BalanceStats;
