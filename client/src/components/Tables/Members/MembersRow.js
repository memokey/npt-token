import React, { memo, useState } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const MembersRow = memo(({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return(
    <tr>
      <td>{item.joindate}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.emailverify}</td>
      <td>{item.kyc}</td>
      <td>
        <Link to="#"><i className="material-icons">co_present</i></Link>&nbsp;
        <Link to="#"><i className='material-icons'>vpn_key</i></Link>&nbsp;
        <Link to="#"><i className="material-icons">cancel_presentation</i></Link>
      </td>
    </tr>
  )
});

MembersRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default MembersRow;
