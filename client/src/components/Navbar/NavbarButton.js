import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavbarButton = memo(({ url, icon, title, description }) => {
  const location = useLocation();

  return (
    <Link
      to={url}
      className={location.pathname.toLowerCase().includes(url) ? 'active nowrap' : 'passive nowrap'}
    >
      <i className='material-icons'>{icon}</i>
      <span>{title}</span>
      <br />
      <small className="text-muted">{description}</small>
    </Link>
  );
});

NavbarButton.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NavbarButton;
