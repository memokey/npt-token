import React,{ useState, useEffect } from 'react';

import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import TopBar from '../../components/Tables/TopBar/TopBar';
import MembersRow from '../../components/Tables/Members/MembersRow';

const MembersSreen = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        username: 'ezio',
        joindate: '2/5/2020 06:24:45',
        email: 'ezio@ezio.it',
        emailverify: 'Yes',
        kyc: 'No',
      },
      {
        id: 2,
        username: 'ezio',
        joindate: '2/6/2020 06:24:45',
        email: 'ezio@ezio.it',
        emailverify: 'Yes',
        kyc: 'No',
      }
    ];

    setData(dataArray);
  }, []);

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
        <Header title='Users' />
        <TopBar
          searchValue={keyword}
          searchOnChange={handleSearchValue}
          searchSubmit={handleSearchSubmit}
        />

        {data && data.length > 0 && (
          <table className='data-table'>
            <thead>
              <tr>
                <th className='left'>Joining date&time</th>
                <th className='left'>User name</th>
                <th className='left'>Email</th>
                <th className='left'>Email verify</th>
                <th className='left'>KYC</th>
                <th className='left'>action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <MembersRow key={item.id.toString()} item={item} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </SiteLayout>
  );
};

export default MembersSreen;
