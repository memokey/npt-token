import { useState, useEffect } from 'react';

import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import TopBar from '../../components/Tables/TopBar/TopBar';
import HistoryAdmin from '../../components/Widgets/History/HistoryAdmin';


const HistoryScreen = () => {
  const [keyword, setKeyword] = useState('');


  const handleSearchValue = (e) => {
    const { value } = e.target;

    setKeyword(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SiteLayout>
      <div className='content'>
        <Header title='History' />
        <TopBar
          searchValue={keyword}
          searchOnChange={handleSearchValue}
          searchSubmit={handleSearchSubmit}
        />
          <HistoryAdmin />
      </div>
    </SiteLayout>
  );
};

export default HistoryScreen;
