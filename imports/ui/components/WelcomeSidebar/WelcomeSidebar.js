import React from 'react';


const WelcomeSidebar = React.createClass({

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
            <aside className="welcome-sidebar">
                <div className="panel panel-default help-panel">
                    <div className="panel-heading clearfix">
                        <strong>Need Help?</strong>
                    </div>
                    <div className="panel-body">
                        Help instructions go here ...
                    </div>
                </div>
                <div className="list-group text-center">
                    <a className={this.checkActive(1) ? 'active list-group-item' : 'list-group-item'} onClick={this.changeMenu1} >
                        <h1 className="list-group-item-heading">
                            <span className="glyphicon glyphicon-info-sign"/>
                        </h1>
                        <h4 className="list-group-item-heading">Tentang Fisipol Digital Library</h4>
                    </a>
                    <a className={this.checkActive(2) ? 'active list-group-item' : 'list-group-item'} onClick={this.changeMenu2} >
                        <h1 className="list-group-item-heading">
                            <span className="glyphicon glyphicon-book" />
                        </h1>
                        <h4 className="list-group-item-heading">Jenis Koleksi</h4>
                    </a>
                </div>
            </aside>
        );
    }
});

export default WelcomeSidebar;
