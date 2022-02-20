import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderRight = memo(() => {
  const location = useLocation();

  return (
    <div className='header-right no-select'>
      <div className='flex flex-center'>
        <ul className='header-menu nowrap'>
          <li>
            {/* <Link
              to='/market'
              className={location.pathname.toLowerCase().includes('/market') ? 'active' : 'passive'}
            >
              Market
            </Link> */}
          </li>
        </ul>
        <ul className='header-icons nowrap'>
          <li>
            <Link className="dropdown-toggle" to="#">
              <i className='material-icons'></i>
              <img src="/images/flag/GB.png" alt="" />
            </Link>
            <ul className="list-unstyled py-2 px-3">
              <li>
                  <Link to="#" className=""><img src="/images/flag/GB.png" alt="" /> English</Link>
              </li>
              <li>
                  <Link to="#" className=""><img src="/images/flag/DE.png" alt="" /> German</Link>
              </li>
              <li>
                  <Link to="#" className=""><img src="/images/flag/FR.png" alt="" /> French</Link>
              </li>
              <li>
                  <Link to="#" className=""><img src="/images/flag/IT.png" alt="" /> Italian</Link>
              </li>
              <li>
                  <Link to="#" className=""><img src="/images/flag/RU.png" alt="" /> Russian</Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className='header-user nowrap'>
          <li className='responsive-hide'>
            <Link to='/members'>
              <span>Administrator</span>
              <span>@neptune</span>
            </Link>
          </li>
          <li>
            <Link to='/members'>
              <div
                className='profile-picture cover'
                style={{
                  backgroundImage: `url('https://pbs.twimg.com/profile_images/1265581417364369408/b7CxjEfi_400x400.jpg')`,
                }}
              />
            </Link>
          </li>
          <li className='responsive-hide'>
            <Link to='/members/signout' className='signout'>
              <i className='material-icons'>power_settings_new</i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default HeaderRight;
