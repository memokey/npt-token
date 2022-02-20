import React,{ useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import HeaderUser from '../../components/Header/HeaderUser';

import Profile from '../../components/Widgets/Profile/Profile';
import ProfileSetting from '../../components/Widgets/Profile/ProfileSetting';

const ProfileScreen = () => (
  <MainLayout>
    <div className='content'>
    <HeaderUser icon='' title='Profile' />
    <div className='flex flex-destroy'>
      <div className='content-30 box-right-padding'>
        <Profile />
      </div>
      <div className='content-70 flex-1'>
        <ProfileSetting />
      </div>
    </div>
    </div>
  </MainLayout>
);

export default ProfileScreen;
