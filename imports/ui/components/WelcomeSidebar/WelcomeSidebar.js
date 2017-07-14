import React from 'react';

const WelcomeSidebar = React.createClass({
    getInitialState() {
        return {
            selected : 1,
        }
    },
    isActive(tabId){
        return this.state.selected === tabId;
    },
    setActive(tab){
        this.setState({
            selected : tab,
        });
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
                    <a className={!this.isActive(1) ? 'active list-group-item list-group-item-warning' : 'list-group-item list-group-item-warning'} onClick={this.setActive('1')}>
                        <h1 className="list-group-item-heading">
                            <span className="glyphicon glyphicon-info-sign"/>
                        </h1>
                        <h4 className="list-group-item-heading">Tentang Fisipol Digital Library</h4>
                    </a>
                    <a className={!this.isActive(2) ? 'active list-group-item list-group-item-warning' : 'list-group-item list-group-item-warning'} onClick={this.setActive('2')}>
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
