import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGaugeChart from 'react-gauge-chart'; // Import the GaugeChart component

class GaugeChart extends Component {
  render() {
    const { nrOfLevels, arcsLength, colors, percent, arcPadding } = this.props;

    return (
      <ReactGaugeChart
        nrOfLevels={nrOfLevels}
        arcsLength={arcsLength}
        colors={colors}
        percent={percent}
        arcPadding={arcPadding}
      />
    );
  }
}

// Define defaultProps inside the class
GaugeChart.defaultProps = {
  nrOfLevels: 420,
  arcsLength: [0.3, 0.3, 0.4],
  colors: ["#F5CD19", "#5BE12C", "#EA4228"],
  percent: 0.5, // You may adjust this default value as needed
  arcPadding: 0.02, // You may adjust this default value as needed
};

// Define propTypes for type checking
GaugeChart.propTypes = {
  nrOfLevels: PropTypes.number,
  arcsLength: PropTypes.arrayOf(PropTypes.number),
  colors: PropTypes.arrayOf(PropTypes.string),
  percent: PropTypes.number,
  arcPadding: PropTypes.number,
};

export default GaugeChart;
