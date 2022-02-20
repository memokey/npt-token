import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useNotification} from 'react-hook-notification';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';
// import { useEthers } from "@usedapp/core";

import { signin } from "../../reducers/authReducer";
import "./custom.css";


const SigninScreen = () => {
  const navigate = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const notification = useNotification();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signin(formValues, navigate, notification));
  };

  return (
    <MainLayout>
      <div className='flex flex-center full-height'>
        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img src='/images/logo.png' alt='Crypto Exchange' draggable='false' />
                </div>
                <h1 className='form-title center'>Login</h1>
                <p className='form-desc center'>
                  Please make sure that {' '}
                  <strong>https://pro.cryptoexchange.com</strong> is written in your browser's address bar.
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='email'>Your Email</label>
                        <FormInput
                          type='email'
                          name='email'
                          value={formValues.email}
                          placeholder='Enter your email'
                          onChange={handleChange}
                        />
                        <label className="input-error">{!!auth.authSigninError ? auth.authSigninError.email: ""}</label>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password'>Your Password</label>
                        <FormInput
                          type='password'
                          name='password'
                          value={formValues.password}
                          placeholder='Enter your password'
                          onChange={handleChange}
                        />
                        <label className="input-error">{!!auth.authSigninError ? auth.authSigninError.password: ""}</label>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width right'>
                        <Link to='/members/forgot-password'>I forgot my password</Link>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton type='submit' text='Login' onClick={handleSubmit}/>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          <Link to='/admin/dashboard'>Go to admin</Link>
                          If you don't have an account, create a <Link to='/members/signup'>new account</Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default SigninScreen;
