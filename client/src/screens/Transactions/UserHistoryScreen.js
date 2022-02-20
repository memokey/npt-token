import { useState, useEffect } from 'react';

import MainLayout from '../../layouts/MainLayout';
import HeaderUser from '../../components/Header/HeaderUser';
import TopBar from '../../components/Tables/TopBar/TopBar';
import HistoryUser from '../../components/Widgets/History/HistoryUser';


const UserHistoryScreen = () => {
  const [keyword, setKeyword] = useState('');


  const handleSearchValue = (e) => {
    const { value } = e.target;

    setKeyword(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MainLayout>
        <div className="content">
            <HeaderUser title='History' />
            <br></br>
            <TopBar
                searchValue={keyword}
                searchOnChange={handleSearchValue}
                searchSubmit={handleSearchSubmit}
            />
            <HistoryUser />
        </div>
    </MainLayout>
  );
};

export default UserHistoryScreen;
