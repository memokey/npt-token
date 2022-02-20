import { memo } from 'react';
import PropTypes from 'prop-types';

const MainLayout = memo(({ children }) => {
  return(
    <div className="container-user">{children}</div>
  );
});

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
