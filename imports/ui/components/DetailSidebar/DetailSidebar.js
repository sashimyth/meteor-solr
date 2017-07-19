import React from 'react';

const DetailSidebar = React.createClass({

    propTypes: {
        menuActive: React.PropTypes.number.isRequired,
    },

    checkActive(tabId){
        //cek false atau true untuk menu
        return this.props.menuActive === tabId;
    },

    changeMenu1(){
      this.props.changeActiveMenu(1);
    },

    changeMenu2(){
      this.props.changeActiveMenu(2);
    },

    render(){
        return (
            <aside className="detail-sidebar">
                <div className="list-group text-center">
                    <a className={this.checkActive(1) ? 'active list-group-item' : 'list-group-item'} onClick={this.changeMenu1} >
                        <h1 className="list-group-item-heading">
                            <span className="glyphicon glyphicon-info-sign"/>
                        </h1>
                        <h4 className="list-group-item-heading">Metadata</h4>
                    </a>
                    <a className={this.checkActive(2) ? 'active list-group-item' : 'list-group-item'} onClick={this.changeMenu2} >
                        <h1 className="list-group-item-heading">
                            <span className="glyphicon glyphicon-book" />
                        </h1>
                        <h4 className="list-group-item-heading">File konten</h4>
                    </a>
                </div>
            </aside>
        );
    }
});

export default DetailSidebar;
