import React,{ memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NormalTableRow = memo(({ item, actions }) => {
    const actionComp = actions.map((action) => {
        return (
            <Link to="#">{action}</Link>
        )
    });
    return(
        <tr key={'list'+item[0]}>
            {item.map((cell, index) => (
                <td key={index.toString()}>{cell}</td>
            ))}<td key={'action'+item[0]}>{actionComp}</td>
        </tr>
    )
});

NormalTableRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
};

export default NormalTableRow;
