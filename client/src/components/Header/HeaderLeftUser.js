import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const HeaderLeftUser = memo(({ icon, title }) => {
  const location = useLocation();
  return(
  <div className='header-left nowrap no-select responsive-hide' style={{marginLeft: 50}}>
    <div className='flex flex-center'>
      <div className='logo' style={{marginTop: -17, marginRight: 20}}>
        <Link to='/'>
          <img src='/images/logo.png' alt='Crypto Exchange' draggable='false' style={{width: 220}} />
        </Link>
      </div>
      <ul className='header-menu nowrap'>
        <li>
          <Link
            to='/panel'
            className={location.pathname.toLowerCase().includes('/panel') ? 'active' : 'passive'}
          >
            Neptune
          </Link>
          <Link
            to='/history'
            className={location.pathname.toLowerCase().includes('/history') ? 'active' : 'passive'}
          >
            History
          </Link>
        </li>
      </ul>
      </div>
  </div>
)});

HeaderLeftUser.defaultProps = {
  icon: null,
};

HeaderLeftUser.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default HeaderLeftUser;
