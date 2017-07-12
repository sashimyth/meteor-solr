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

  contentResult(){
    alert("content here");
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
    const nama = this.cleanSpaces(this.props.result.judul);
    // const title = this.cleanSpaces(this.props.result.title);
    const pdf = this.cleanSpaces(this.props.result.file2);
    const resultUrl = encodeURI(this.props.result.judul);
    const pdfUrl = encodeURI(this.props.result.file2);
    const bahasa = this.cleanSpaces(this.props.result.bahasa);

    return (
      <li className="search-result">
        <div className="search-result-title">
          <a
            href={resultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={this.props.result.subyek}
            onClick={this.logSearchResult}
          >
            {nama}
          </a>
        </div>
        <div className="search-result-description">
          <span dangerouslySetInnerHTML={this.renderContent()} />

        </div>
        <div className="search-metadata">
          ID Pustaka    : {SearchFacetUtils.getCustomValue('id_pustaka', this.props.result.id)}
          <br/>
          Pengarang   : {SearchFacetUtils.getCustomValue('pengarang', this.props.result.pengarang)}
          <br/>
          Tahun Terbit: {SearchFacetUtils.getCustomValue('th_terbit', this.props.result.th_terbit)}
          <br/>
          Kota Terbit : {SearchFacetUtils.getCustomValue('kota_terbit', this.props.result.kota_terbit)}
          <br/>
          Penerbit    : {SearchFacetUtils.getCustomValue('penerbit', this.props.result.penerbit)}
          <br/>
          if (bahasa == "ind")
      { const bahasa1 ="Bahasa Indonesia"};

          Bahasa    : {bahasa}
          <br/>
          Jumlah halaman    : {SearchFacetUtils.getCustomValue('jml_hlm', this.props.result.jml_hlm)}
          <br/>
          Subyek    : {SearchFacetUtils.getCustomValue('subyek', this.props.result.subyek)}
          <br/>
          Kontributor    : {SearchFacetUtils.getCustomValue('kontributor', this.props.result.kontributor)}
          <br/>
          <a
            href={pdf}
            target="_blank"
          >
            Lihat file : {pdf}
        </a>
        </div>
      </li>
    );
  },

});

export default SearchResult;
