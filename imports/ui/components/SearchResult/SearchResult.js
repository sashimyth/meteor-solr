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

  bringContent(){
    this.logSearchResult;
    this.props.changeContentState(true);
    const newContentData = _.extend({}, this.props.contentData);
    newContentData.judul = this.props.result.judul;
    newContentData.tahun = this.props.result.th_terbit;
    newContentData.kota = this.props.result.kota_terbit;
    newContentData.klasifikasi = this.props.result.klasifikasi;
    newContentData.halaman = this.props.result.jml_hlm;
    newContentData.subyek = this.props.result.subyek;
    newContentData.pengarang = this.props.result.pengarang;
    newContentData.penerbit = this.props.result.penerbit;
    newContentData.jml_hlm = this.props.result.jml_hlm;
    newContentData.file = this.props.result.file2;
    this.props.changeContentData(newContentData);
  },

  renderContent() {
    return {
      __html: this.cleanSpaces(this.props.result.address),
    };
  },

  render() {
    const nama = this.cleanSpaces(this.props.result.judul);
    // const title = this.cleanSpaces(this.props.result.title);
    const pdf = this.cleanSpaces(this.props.result.file2);
    const resultUrl = encodeURI(this.props.result.judul);
    const pdfUrl = encodeURI(this.props.result.file2);
    return (
      <li className="search-result">
        <div className="search-result-title">
          <a
            rel="noopener noreferrer"
            className={this.props.result.judul}
            onClick={this.bringContent}
          >
            {nama}
          </a>
        </div>
        <div className="search-result-description">
          <span dangerouslySetInnerHTML={this.renderContent()} />

        </div>
        <div className="search-metadata">
          <dl className="">
            <dt>Sumber: </dt><dd>{this.props.result.penerbit}</dd>
            <dt>Pengarang: </dt><dd>{this.props.result.pengarang}</dd>
            <dd><span className="label label-warning">Tahun terbit: {this.props.result.th_terbit}</span> &nbsp;
            <span className="label label-warning">Jumlah halaman: {this.props.result.jml_hlm}</span></dd>
          </dl>
        </div>
      </li>
    );
  },

});

export default SearchResult;
