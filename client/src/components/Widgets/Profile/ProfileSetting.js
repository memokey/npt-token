import React,{ memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Box from '../../Common/Box';
import FormInput from '../../Forms/FormInput';
import FormButton from '../../Forms/FormButton';
import FormGroup from '../../Forms/FormGroup';
import FormTextArea from '../../Forms/FormTextArea';

const ProfileSetting = memo(() => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <p>Profile Setting</p>
          <div>
          <button type="button" className="box-icon pointer"><i className="material-icons">edit</i></button>
          </div>
        </div>
      </div>
      <div className='box-content'>
      <form className='form ' noValidate>
        <div className='form-elements'>
            <div className='form-line'>
                <div className='half-width'>
                    <label htmlFor='username'>User Name</label>
                    <FormInput
                        type='text'
                        name='username'
                        value={formValues.username}
                        placeholder='Enter your username'
                        onChange={handleChange}
                    />
                </div>
                <div className='half-width'>
                    <label htmlFor='password'>Password</label>
                    <FormInput
                        type='password'
                        name='password'
                        value={formValues.password}
                        placeholder='Enter your password'
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='form-line'>
                <div className='three-width'>
                    <label htmlFor='company'>Company Name</label>
                    <FormInput
                        type='text'
                        name='company'
                        value={formValues.company}
                        placeholder=''
                        onChange={handleChange}
                    />
                </div>
                <div className='three-width'>
                    <label htmlFor='contact'>Contact Person</label>
                    <FormInput
                        type='text'
                        name='contact'
                        value={formValues.contact}
                        placeholder=''
                        onChange={handleChange}
                    />
                </div>
                <div className='three-width'>
                    <label htmlFor='mobile'>Mobile Number</label>
                    <FormInput
                        type='text'
                        name='mobile'
                        value={formValues.mobile}
                        placeholder=''
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='form-line'>
                <div className='full-width'>
                    <label htmlFor='address'>Address</label>
                    <FormTextArea
                        type='text'
                        name='address'
                        value={formValues.address}
                        placeholder=''
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='form-line'>
                <div className='half-width'>
                    <label htmlFor='email'>Email</label>
                    <FormInput
                        type='email'
                        name='email'
                        value={formValues.email}
                        placeholder='Enter your email'
                        onChange={handleChange}
                    />
                </div>
                <div className='half-width'>
                    <label htmlFor='website'>Website Url</label>
                    <FormInput
                        type='text'
                        name='website'
                        value={formValues.password}
                        placeholder='Enter your website url'
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='form-line'>
                <div className='four-width'>
                    <label htmlFor='country'>Country</label>
                    <FormInput
                        type='text'
                        name='country'
                        value={formValues.country}
                        placeholder='Enter your country'
                        onChange={handleChange}
                    />
                </div>
                <div className='four-width'>
                    <label htmlFor='province'>State/Province</label>
                    <FormInput
                        type='text'
                        name='province'
                        value={formValues.province}
                        placeholder='Enter your State/Province'
                        onChange={handleChange}
                    />
                </div>
                <div className='four-width'>
                    <label htmlFor='city'>City</label>
                    <FormInput
                        type='text'
                        name='city'
                        value={formValues.city}
                        placeholder='Enter your city'
                        onChange={handleChange}
                    />
                </div>
                <div className='four-width'>
                    <label htmlFor='postal'>Postal code</label>
                    <FormInput
                        type='number'
                        name='postal'
                        value={formValues.postal}
                        placeholder='Enter your State/Province'
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='form-line'>
                <div className='buttons' >
                    <FormButton type='submit' text='Save' onClick={handleSubmit} />
                </div>
            </div>
        </div>
    </form>
      </div>
    </Box>
  );
});

export default ProfileSetting;
