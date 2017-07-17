/* eslint-disable react/prefer-es6-class */

import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import PowerSearch from '../../../api/search/search_source';
import SearchSort from '../../../api/search/search_sort';
import SearchLogger from '../../../utility/search_logger';
import getSuggestions from '../../../api/search/autosuggest';
import WelcomeContent from '../WelcomeContent/WelcomeContent';
import WelcomeSidebar from '../WelcomeSidebar/WelcomeSidebar';
import ResultsCount from '../ResultsCount/ResultsCount';
import Sorting from '../Sorting/Sorting';
import Counting from '../Counting/Counting';
import SearchResults from '../SearchResults/SearchResults';
import Pagination from '../Pagination/Pagination';
import NestedCategoriesWidget from '../NestedCategoriesWidget/NestedCategoriesWidget';
import SearchFacet from '../SearchFacet/SearchFacet';
import SearchLogo from '../SearchLogo/SearchLogo';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import ResultDetail from '../ResultDetail/ResultDetail';

const SearchContainer = React.createClass({

  mixins: [ReactMeteorData],

  getInitialState() {
    return {
        contentChanged : false,
        contentData : this.contentData(),
        searchParams: this.defaultSearchParams(),
        searchSuggestions: [],
        menuActive : 1,
    };
  },

  getMeteorData() {
    const searchParams = this.state.searchParams;
    if (searchParams.keywords) {
      PowerSearch.search(
        searchParams.keywords,
        {
          currentPage: searchParams.currentPage,
          fields: searchParams.fields,
          resultsPerPage: searchParams.resultsPerPage,
          sorting: SearchSort.getSolrSort(searchParams.sorting),
        }
      );
    }

    const searchResults = PowerSearch.getData({
      sort: SearchSort.getMongoSort(searchParams.sorting),
      transform(matchText, regExp) {
        return matchText.replace(regExp, '<strong>$&</strong>');
      },
    });
    const searchMetadata = PowerSearch.getMetadata();

    return {
      searchResults,
      searchMetadata,
    };
  },

  defaultSearchParams() {
    return {
      keywords: '',
      fields: {},
      currentPage: 1,
      resultsPerPage: 20,
      lastAddedFieldName: null,
      suggestionKeywords: '',
      sorting: SearchSort.lookup.relevancy.id,
    };
  },

    contentData(){
        // default dari state data resulDdetail
        return {
            judul : 'kosong',
            pengarang : 'kosong',
            halaman : 'kosong',
            klasifikasi : 'kosong',
            subyek : 'kosong',
            kota : 'kosong',
            tahun : 'kosong',
            penerbit : 'kosong',
            file : 'kosong',
        }
    },

  showContent(){
    // toggle untuk mengubah state dibawah secara langsung
    if (!this.state.contentChanged) {
      return ("false");
    }else{
      return ("true");
    };
  },

  changeContentState(newContentChange){
    // mengubah kondisi dari state apakah mengujungi detail pencarian
    this.setState({
      contentChanged : newContentChange
    });
  },

  changeContentData(newContent){
    // mengubah state data resultDetail
    this.setState({
      contentData : newContent
    });
  },

    changeActiveMenu(newMenuActive){
        // mengubah tab active menu
        this.setState({
            menuActive : newMenuActive,
        });
    },

  updateSearchParams(newSearchParams) {
    if (newSearchParams) {
      this.setState({
        searchParams: newSearchParams,
      });
      SearchLogger.logSearchToCloud(newSearchParams);
    } else {
      this.setState({
        searchParams: this.defaultSearchParams(),
        searchSuggestions: [],
      });
    }
  },

  provideSuggestions(suggestionKeywords) {
    if (suggestionKeywords) {
      getSuggestions.call({
        suggestionKeywords,
      }, (error, suggestions) => {
        this.setState({
          searchSuggestions: suggestions,
        });
      });
    } else {
      this.setState({
        searchSuggestions: [],
      });
    }
  },

  renderMain() {
    let mainContent;
    if (!this.state.searchParams.keywords) {
      mainContent = (
        <main>
          <WelcomeContent
            menuActive={this.state.menuActive}
            key="jenis_koleksi"
            name="Jenis Koleksi"
            field="jenis_koleksi"
            searchParams={this.state.searchParams}
            handleSearchParamsUpdate={this.updateSearchParams}
          />
        </main>
      );
    } else if (PowerSearch.getStatus().loaded) {
      if (this.state.contentChanged) {
        mainContent = (
            <main>
              <ResultDetail
                contentData={this.state.contentData}
              />
            </main>
          );
      } else if (this.data.searchResults.length) {
        mainContent = (
          <main>
            <div className="row">
              <div className="col-md-7">
                <ResultsCount
                  searchMetadata={this.data.searchMetadata}
                  searchParams={this.state.searchParams}
                />
              </div>
              <div className="col-md-3">
                <Sorting
                  searchParams={this.state.searchParams}
                  handleSearchParamsUpdate={this.updateSearchParams}
                />
              </div>

              <div className="col-sm-2">
                <Counting
                  searchParams={this.state.searchParams}
                  handleSearchParamsUpdate={this.updateSearchParams}
                />
              </div>
            </div>
            <SearchResults
              contentData={this.state.contentData}
              changeContentState={this.changeContentState}
              changeContentData={this.changeContentData}
              searchResults={this.data.searchResults}
              searchParams={this.state.searchParams}
              searchMetadata={this.data.searchMetadata}
            />
            <Pagination
              searchMetadata={this.data.searchMetadata}
              searchParams={this.state.searchParams}
              handleSearchParamsUpdate={this.updateSearchParams}
            />
          </main>
        );
      } else {
        mainContent = (<main>No results found.</main>);
      }
    } else if (PowerSearch.getStatus().loading) {
      mainContent = (
        <main>
          Loading ...
        </main>
      );
    } else {
      mainContent = (
        <main>
          Oh no! Looks like were having problems completing your search!
        </main>
      );
    }
    return mainContent;
  },

  renderSidebar() {
    let sidebarContent;
    if (!this.state.searchParams.keywords) {
      sidebarContent = (<WelcomeSidebar
          changeActiveMenu={this.changeActiveMenu}
          menuActive={this.state.menuActive}
      />);
    } else if (PowerSearch.getStatus().loading) {
      sidebarContent = (
        <aside>
          Loading ...
        </aside>
      );
    } else if (this.state.contentChanged) {
        sidebarContent = (<WelcomeSidebar
            changeActiveMenu={this.changeActiveMenu}
            menuActive={this.state.menuActive}
        />);
      } else if (this.data.searchMetadata.facets) {
      sidebarContent = (
        <aside>
          <h2>Refine Your Search</h2>
          <SearchFacet
            key="subyek"
            name="Subyek"
            field="subyek"
            values={this.data.searchMetadata.facets.subyek}
            searchParams={this.state.searchParams}
            handleSearchParamsUpdate={this.updateSearchParams}
          />
          <SearchFacet
            key="th_terbit"
            name="Tahun Terbit"
            field="th_terbit"
            values={this.data.searchMetadata.facets.th_terbit}
            searchParams={this.state.searchParams}
            handleSearchParamsUpdate={this.updateSearchParams}
          />
          <SearchFacet
            key="kota_terbit"
            name="Kota Terbit"
            field="kota_terbit"
            values={this.data.searchMetadata.facets.kota_terbit}
            searchParams={this.state.searchParams}
            handleSearchParamsUpdate={this.updateSearchParams}
          />
          <SearchFacet
            key="penerbit"
            name="Penerbit"
            field="penerbit"
            values={this.data.searchMetadata.facets.penerbit}
            searchParams={this.state.searchParams}
            handleSearchParamsUpdate={this.updateSearchParams}
          />
          <SearchFacet
            key="kontributor"
            name="Kontributor"
            field="kontributor"
            values={this.data.searchMetadata.facets.kontributor}
            searchParams={this.state.searchParams}
            handleSearchParamsUpdate={this.updateSearchParams}
          />
          <SearchFacet
            key="jenis_koleksi"
            name="Jenis Koleksi"
            field="jenis_koleksi"
            values={this.data.searchMetadata.facets.jenis_koleksi}
            searchParams={this.state.searchParams}
            handleSearchParamsUpdate={this.updateSearchParams}
          />
        </aside>
      );
    }
    return sidebarContent;
  },
  rendering(){
    // Mengubah posisi aside dan main
    let content;
    if (!this.state.searchParams.keywords) {
      content = (
        <div className="row">
          <div className="col-md-4">
            {this.renderSidebar()}
          </div>
          <div className="col-md-8">
            {this.renderMain()}
          </div>
        </div>
      );
    }else if(this.state.contentChanged) {
      content = (
        <div className="row">
          <div className="col-md-12">
            {this.renderMain()}
          </div>
        </div>
      );
    }else {
      content = (
        <div className="row">
          <div className="col-md-8">
            {this.renderMain()}
          </div>
          <div className="col-md-4">
            {this.renderSidebar()}
          </div>
        </div>
      );
    };
    return content;
  },

  render() {
    return (
      <div className="search-container">
        <header>
          <nav className="navbar navbar-default blue-top">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <SearchLogo />
                    {/*<div className="form-inline my-2 my-lg-2">*/}
                        {/*<button className="btn btn-info">Login</button>*/}
                        {/*<a href="#" className="btn-default"><i className="fa fa-language"/>Indonesia</a>*/}
                    {/*</div>*/}
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-8">
                  <SearchBar
                    menuActive={this.state.menuActive}
                    changeActiveMenu={this.changeActiveMenu}
                    changeContentState={this.changeContentState}
                    searchParams={this.state.searchParams}
                    handleSearchParamsUpdate={this.updateSearchParams}
                    searchSuggestions={this.state.searchSuggestions}
                    requestSuggestions={this.provideSuggestions}
                  />
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </nav>
        </header>
        <div className="search-body">
          <div className="container">
            {this.rendering()}
          </div>
        </div>
        <Footer />
      </div>
    );
  },

});

export default SearchContainer;
