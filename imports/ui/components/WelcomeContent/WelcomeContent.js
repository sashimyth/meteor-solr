import React from 'react';

import { _ } from 'meteor/underscore';

import SearchFacetUtils from '../../../api/search/search_facet_utils';

const WelcomeContent = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired,
        field: React.PropTypes.string.isRequired,
        searchParams: React.PropTypes.object.isRequired,
        handleSearchParamsUpdate: React.PropTypes.func.isRequired,
    },

    refineByCat(event) {
      event.preventDefault();
      const selected = event.currentTarget.getAttribute('data');
      const newSearchParams = _.extend({}, this.props.searchParams);
      newSearchParams.keywords = " ";
      newSearchParams.fields[this.props.field] = selected;
      newSearchParams.currentPage = 1;
      newSearchParams.lastAddedFieldName = this.props.field;
      this.props.handleSearchParamsUpdate(newSearchParams);
      window.scroll(0, 0);
    },

    renderWelcome(){
      return (
          <div className="welcome-content panel panel-default help-panel">
              <div className="welcome-get-started clearfix panel-heading">
                  <h1>Selamat datang di situs web Perpustakaan FISIPOL UGM</h1>
              </div>
              <div className="panel-body">

                  <h3>Tentang Perpustakaan Digital FISIPOL UGM</h3>
                  <p>
                      Situs ini adalah situs yang dibangun oleh perpustakaan
                      dengan tujuan sebagai sarana komunikasi antar pengelola
                      dengan pengguna perpustakaan serta sebagai sarana publikasi
                      layanan dan koleksi yang dimiliki perpustakaan.
                      Diharapkan dengan keberadaan situs ini semakin memperlancar
                      komunikasi antara pengelola perpustakaan dengan pengguna perpustakaan serta pengguna mengetahui
                      layanan dan koleksi-koleksi terbaru yang dimiliki perpustakaan.
                      Semoga dengan keberadaan situs ini layanan serta koleksi yang
                      dimiliki perpustakaan dapat lebih optimal diakses oleh
                      pengguna perpustakaan.
                  </p>
                  <p>Melalui situs ini pengguna perpustakaan dapat melakukan pencarian koleksi buku digital:</p>
                  <ul>
                      <li> Dengan bermacam jenis koleksi </li>
                      <li> Pencarian cepat dan tepat </li>
                  </ul>

                  <div className="welcome-get-started clearfix">
                      <div className="pull-left hidden-xs">
                          <i className="fa fa-info-circle fa-2x" />
                      </div>
                      <div className="pull-left welcome-get-started-msg">
                          Untuk memulai pencarian, masukkan kata kunci pada kotak diatas
                      </div>
                  </div>
              </div>
          </div>
      );
    },

    renderKoleksi(nameCat){
        const customName = SearchFacetUtils.getCustomValue(this.props.field, nameCat);
        let catLink;
        catLink = (
            <a key={nameCat} href="#facet" className="list-group-item" onClick={this.refineByCat} data={nameCat}>
                <h1 className="list-group-item-heading">
                    <span className="glyphicon glyphicon-book" />
                </h1>
                <h4 className="list-group-item-heading">{customName}</h4>
            </a>
        );
      return catLink;
    },

    renderMaintainWelcome(){
        let con;
        const valueCat = [];
        switch (this.props.menuActive){
            case 1:
                return con = (
                    this.renderWelcome()
                );
            case 2:
                const SearchConfig = {};
                _.extend(SearchConfig, Meteor.settings.public.search);
                const customLabels = SearchConfig.customFacetLabels[this.props.field];
                Object.keys(customLabels).map((key) => {
                   valueCat.push(
                       this.renderKoleksi((key))
                   )
                });
                return con = (
                    <div className="welcome-content">
                        <div className="list-group text-center">
                            {valueCat}
                        </div>
                    </div>
                );
        }
        return con;
    },
    render(){
        return (
            this.renderMaintainWelcome()
        );
    },
});

export default WelcomeContent;
