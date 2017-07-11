/* global document */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Search from '../../ui/pages/Search';
import Content from '../../ui/pages/Content';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Search} />
    <Route path="/:judul" component={Content} />
  </Router>
), document.getElementById('app'));
