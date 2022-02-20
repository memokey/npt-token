import { memo } from 'react';
import PropTypes from 'prop-types';

import HeaderLeftUser from './HeaderLeftUser';
import HeaderRightUser from './HeaderRightUser';

const HeaderUser = memo(({ icon, title }) => (
  <header className='flex flex-center flex-space-between'>
    <HeaderLeftUser icon={icon} title={title} />
    <HeaderRightUser />
  </header>
));

HeaderUser.defaultProps = {
  icon: null,
};

HeaderUser.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default HeaderUser;
