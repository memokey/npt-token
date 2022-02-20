import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useNotification } from 'react-hook-notification';
import ConnectButton from '../../components/Wallet/ConnectButton';

import { logout } from "../../reducers/authReducer";

const HeaderRightUser = memo(() => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useHistory();
  const notification = useNotification();

  const logoutUser = () => {
    dispatch(logout(navigate, notification));
  }

  return (
    <div className='header-right no-select'>
      <div className='flex flex-center'>
        <ul className='header-menu nowrap'>
          <li className='responsive-show'>
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
        <ul className='header-icons npwrap' style={{marginRight: "10px"}}>
          <li className='responsive-hide'>
            <ConnectButton />
          </li>
        </ul>
        <ul className='header-icons nowrap'>
          <li>
            <Link className="dropdown-toggle" to="#">
              <i className='material-icons'></i>
              <img src="/images/flag/GB.png" alt="" style={{marginTop: "-15px"}} />
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
              <span>{auth.authData.name}</span>
              <span>{auth.authData.email}</span>
            </Link>
          </li>
          <li>
            <Link to='/members'>
              <div
                className='profile-picture cover'
                style={{
                  backgroundImage: ('url('+ (auth.authData.avatar === "" ? '/images/avatars/small-avatar.png' : auth.authdata.avatar) +')'),
                }}
              />
            </Link>
          </li>
          <li>
            <Link to="#" onClick={logoutUser} className='signout'>
              <i className='material-icons'>power_settings_new</i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default HeaderRightUser;
