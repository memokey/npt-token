import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar/Navbar';

const SiteLayout = memo(({ children }) => {
  const [disp, setDisp] = useState('responsive-hide');
  const switchTheme = () => {
    const newTheme = disp === 'responsive-hide'?'pos-fix':'responsive-hide';
    setDisp(newTheme);
  }
  return(
    <div className='flex'>
      <button className="responsive-show" onClick={switchTheme}><i className='material-icons'>list</i></button>
      <div className={'navbar full-height '+disp}>
        <Navbar />
      </div>
      <div className='content full-height flex-1'>{children}</div>
    </div>
  )
});

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
