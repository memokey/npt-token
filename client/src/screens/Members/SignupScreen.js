import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNotification } from 'react-hook-notification';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';
// import FormCheckbox from '../../components/Forms/FormCheckbox';

import { signup } from "../../reducers/authReducer";
import "./custom.css";

const SignupScreen = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    phone: '',
    password: '',
    password1: '',
    name: '',
    // lastname: '',
    // citizenship: false,
    // identityType: '',
    // identityNumber: '',
    // day: '',
    // month: '',
    // year: '',
    // country: '',
    // operator: '',
    // agreeToPolicies1: false,
    // agreeToPolicies2: false,
    // agreeToPolicies3: false,
  });
  const dispatch = useDispatch();
  const navigate = useHistory();
  const notification = useNotification();

  const auth = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;

  //   setFormValues({
  //     ...formValues,
  //     [name]: checked,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signup(formValues, navigate, notification))
  };

  return (
    <MainLayout>
      <div className='flex flex-center'>
        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img src='/images/logo.png' alt='Crypto Exchange' draggable='false' />
                </div>
                <h1 className='form-title center'>Account creation</h1>
                <p className='form-desc center'>
                  Please enter the information below.
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='email'>E-mail address</label>
                        <FormInput
                          type='email'
                          name='email'
                          value={formValues.email}
                          placeholder='Enter your E-mail address'
                          onChange={handleChange}
                        />
                        <label className="input-error">{!!auth.authSignupError ? auth.authSignupError.email: ""}</label>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password'>Your password</label>
                        <FormInput
                          type='password'
                          name='password'
                          value={formValues.password}
                          placeholder='Enter your password'
                          onChange={handleChange}
                        />
                        <label className="input-error">{!!auth.authSignupError ? auth.authSignupError.password: ""}</label>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password1'>Verify your password</label>
                        <FormInput
                          type='password'
                          name='password1'
                          value={formValues.password1}
                          placeholder='Reenter password'
                          onChange={handleChange}
                        />
                        <label className="input-error">{!!auth.authSignupError ? auth.authSignupError.password1: ""}</label>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='name'>Your name</label>
                        <FormInput
                          type='text'
                          name='name'
                          value={formValues.name}
                          placeholder='Enter your name'
                          onChange={handleChange}
                        />
                        <label className="input-error">{!!auth.authSignupError ? auth.authSignupError.name: ""}</label>
                      </div>
                    </div>
                    {/* <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='lastname'>Your last name</label>
                        <FormInput
                          type='text'
                          name='lastname'
                          value={formValues.lastname}
                          placeholder='Enter your last name'
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='citizenship'
                          checked={formValues.citizenship}
                          text='I am a citizen of ...'
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='half-width'>
                        <label htmlFor='identityType'>ID type</label>
                        <select name='identityType' id='identityType'>
                          <option value='1'>TC kimlik no</option>
                          <option value='2'>National ID</option>
                          <option value='3'>Passport</option>
                          <option value='4'>Driver license</option>
                        </select>
                      </div>
                      <div className='half-width'>
                        <label htmlFor='identityNumber'>Identification number</label>
                        <FormInput
                          type='text'
                          name='identityNumber'
                          value={formValues.identityNumber}
                          placeholder='Enter your ID number'
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='three-width'>
                        <label htmlFor='day'>Date of birth</label>
                        <select name='day' id='day'>
                          <option value='1'>Day</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='month'>&nbsp;</label>
                        <select name='month' id='month'>
                          <option value='1'>Month</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='year'>&nbsp;</label>
                        <select name='year' id='year'>
                          <option value='1'>Year</option>
                        </select>
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='three-width'>
                        <label htmlFor='country'>Phone</label>
                        <select name='country' id='country'>
                          <option value='1'>Country code</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='operator'>&nbsp;</label>
                        <select name='operator' id='operator'>
                          <option value='1'>Operator code</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='phone'>&nbsp;</label>
                        <FormInput
                          type='text'
                          name='phone'
                          value={formValues.phone}
                          placeholder='Enter your phone number'
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies1'
                          checked={formValues.agreeToPolicies1}
                          text={`I have read the KVVK Illumination Text and I accept the user agreement.`}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies2'
                          checked={formValues.agreeToPolicies2}
                          text={`I have read and reviewed the KVVK Open Consent Text. I consent to the processing and transfer of my personal data within the scope of this text.`}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies3'
                          checked={formValues.agreeToPolicies3}
                          text='I agree to receive commercial electronic messages via e-mail, telephone and electronic communication channels within the scope of the KVVK Enlightenment Text regarding products and services.'
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div> */}
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton type='submit' text='Create account' onClick={handleSubmit} />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          Do you have an account? <Link to='/'>Login</Link>.
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

export default SignupScreen;
