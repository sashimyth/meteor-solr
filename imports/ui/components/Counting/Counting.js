/* global window */
/* eslint-disable react/prefer-es6-class */

import React from 'react';
import { _ } from 'meteor/underscore';

const Counting = React.createClass({

  propTypes: {
    searchParams: React.PropTypes.object.isRequired,
    handleSearchParamsUpdate: React.PropTypes.func.isRequired,
  },

  updateSearchParams(event) {
    const newSearchParams = _.extend({}, this.props.searchParams);
    newSearchParams.resultsPerPage = event.target.value;
    newSearchParams.currentPage = 1;
    this.props.handleSearchParamsUpdate(newSearchParams);
    window.scroll(0, 0);
  },

  renderCountOptions() {
    const countOptions = [
      {
        label: '10',
        value: 10,
      },
      {
        label: '20',
        value: 20,
      },
      {
        label: '50',
        value: 50,
      },
    ];
    const renderedOptions = [];
    countOptions.forEach((option) => {
      renderedOptions.push(
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });
    return renderedOptions;
  },

  render() {
    return (
      <div className="counting">
        <select
          className="form-control"
          onChange={this.updateSearchParams}
          value={this.props.searchParams.resultsPerPage}
        >
          {this.renderCountOptions()}
        </select>
      </div>
    );
  },

});

export default Counting;