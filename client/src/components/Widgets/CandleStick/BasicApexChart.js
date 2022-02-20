import { memo, useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

import Box from '../../Common/Box';
import BasicApexRow from './BasicApexRow';

const BasicApexChart = memo(({data, extra_data, title}) => {

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        {title}
      </div>
      <div className='box-content'>
        {!!data && (
          <ReactApexChart
            options={data.options}
            series={data.series}
            type='line'
            height={300}
          />
        )}
        {extra_data && extra_data.length > 0 && <div className='box-content'>
            <div className='trade-history-row'>
                <table>
                    <tbody>
                        {extra_data.map((item, index) => (
                            <BasicApexRow key={'bought_data'+index.toString()} item={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>}
      </div>
    </Box>
  );
});

BasicApexChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  extra_data: PropTypes.array.isRequired,
};

export default BasicApexChart;
