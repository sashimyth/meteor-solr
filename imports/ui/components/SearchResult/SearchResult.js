/* eslint-disable react/prefer-es6-class */

import React from 'react';

import SearchLogger from '../../../utility/search_logger';
import DateFormatter from '../../../utility/date_formatter';
import SearchFacetUtils from '../../../api/search/search_facet_utils';

const SearchResult = React.createClass({

  propTypes: {
    result: React.PropTypes.object,
    currentPage: React.PropTypes.number.isRequired,
    searchMetadata: React.PropTypes.object.isRequired,
  },

  logSearchResult(event) {
    SearchLogger.logSearchResult(
      event.target.href,
      this.props.currentPage,
      this.props.searchMetadata.loggedSearchId
    );
  },

  /**
   * Something is causing certain content blocks to have their whitespace
   * converted to &nbsp;'s. This likely has to do with the encoding of some
   * content when indexing via Solr. For now converting all space values to
   * normal spaces fixes the issue.
   */
  cleanSpaces(content) {
    let cleanContent = '';
    if (content) {
      cleanContent = content.replace(/(?! )\s/g, ' ');
    }
    return cleanContent;
  },

  renderContent() {
    return {
      __html: this.cleanSpaces(this.props.result.address),
    };
  },

  render() {
    const nama = this.cleanSpaces(this.props.result.nama);
    // const title = this.cleanSpaces(this.props.result.title);
    const pdf = this.cleanSpaces(this.props.result.pdf);
    const resultUrl = encodeURI(this.props.result.returnUrl);
    const pdfUrl = encodeURI(this.props.result.pdf);
    return (
      <li className="search-result">
        <div className="search-result-title">
          <a
            href={resultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={this.props.result.nama}
            onClick={this.logSearchResult}
          >
            {nama}
          </a>
        </div>
        <div className="search-result-description">
          <span dangerouslySetInnerHTML={this.renderContent()} />

        </div>
        <div className="search-metadata">
          {SearchFacetUtils.getCustomValue('email', this.props.result.email)}
          &nbsp;| {DateFormatter.format(this.props.result.lastmodified)} | <a
            href={pdf}
            target="_blank"
        >
            Lihat file {pdf}
        </a>
        </div>
      </li>
    );
  },

});

export default SearchResult;
