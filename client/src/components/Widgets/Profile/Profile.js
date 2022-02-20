import React,{ memo, useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '../../Common/Box';

const Profile = memo(() => {

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <p>My Profile</p>
          <button type="button" className="box-icon pointer"><i className="material-icons">edit</i></button>
        </div>
      </div>
      <div className='widget-profile box-content'>
        <div className='center'>
          <form className='upload no-select' noValidate>
            <input type='file' name='file' id='file' accept='.jpg, .jpeg' />
            <label htmlFor='file'>
              <div
                className='icon cover pointer'
                style={{
                  backgroundImage: `url('https://pbs.twimg.com/profile_images/1265581417364369408/b7CxjEfi_400x400.jpg')`,
                }}
              />
              <div className='edit pointer'>
                <i className='material-icons'>edit</i>
              </div>
            </label>
          </form>
        </div>
        <div className='box-horizontal-padding'>
          <div className='center'>
            <h3>Adrian Allan</h3>
            <strong>24 years, Califonia</strong>
          </div>
          <div>
            <p>Duis felis ligula, pharetra at nisl sit amet, ullamcorper fringilla mi. Cras luctus metus non enim porttitor sagittis. Sed tristique scelerisque arcu id dignissim.</p>
            <label><i className="material-icons">phone_android</i>203-124-3331</label><br />
            <label><i className="material-icons">email</i>adrianallan@gmail.com</label><br />
            <label><i className="material-icons">cake</i>23/12/1955</label><br />
            <label><i className="material-icons">perm_contact_cal</i>2734 West Fork Street,EASTON 02334.</label>
          </div>
        </div>
      </div>
    </Box>
  );
});

export default Profile;
