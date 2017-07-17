/* global window */
/* eslint-disable react/prefer-es6-class */

import React from 'react';
import { _ } from 'meteor/underscore';

import SearchSort from '../../../api/search/search_sort';

const Sorting = React.createClass({

  propTypes: {
    searchParams: React.PropTypes.object.isRequired,
    handleSearchParamsUpdate: React.PropTypes.func.isRequired,
  },

  updateSearchParams(event) {
    const newSearchParams = _.extend({}, this.props.searchParams);
    newSearchParams.resultsPerPage = event.currentTarget.value;
    newSearchParams.currentPage = 1;
    this.props.handleSearchParamsUpdate(newSearchParams);
    window.scroll(0, 0);
  },

  renderSortOptions() {
    const sortOptions = [
      {
        label: '10',
        value: this.setState ({
          resultsPerPage : 10,
        }),
      },
      {
        label: '20',
        value: this.setState({
          resultsPerPage : 20,
        }),
      },
      {
        label: '50',
        value: this.setState({
          resultsPerPage : 50,
        }),
      },
    ];
    const renderedOptions = [];
    sortOptions.forEach((option) => {
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
          {this.renderSortOptions()}
        </select>
      </div>
    );
  },

});

export default Sorting;
