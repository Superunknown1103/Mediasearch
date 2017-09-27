import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementbyId('root')
);

// Pass in routes and browserHistory as props to Router here. browserHistory uses your browser's
// History API to create a clean and real URL without the crap that comes with using
// hashHistory.

// Router API keeps UI and URL in sync. Ensures that required props are passed whenever
// you change URL.
