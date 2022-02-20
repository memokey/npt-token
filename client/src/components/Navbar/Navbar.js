import { memo } from 'react';
import { Link } from 'react-router-dom';

import NavbarButton from './NavbarButton';

const Navbar = memo(() => (
  <nav className='navbar-inner no-select'>
    <div className='logo'>
      <Link to='/market'>
        <img src='/images/logo.png' alt='Crypto Exchange' draggable='false' />
      </Link>
    </div>
    <h3 style={{width: 185}}></h3>
    <ul>
      <li>
        <NavbarButton url='/admin/dashboard' icon='dashboard' title='Dashboard' description='Analytics Report' />
      </li>
      <li>
        <NavbarButton url='/admin/members' icon='people_outline' title='Users' description='Users Report' />
      </li>
      <li>
        <NavbarButton url='/admin/history' icon='history' title='History' description='History Report' />
      </li>
    </ul>
  </nav>
));

export default Navbar;
