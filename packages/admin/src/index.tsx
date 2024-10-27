/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react';
import Theme from './themes';
import GlobalStyles from './themes/GlobalStyles';
import history from './utils/history';
import GlobalContainer from './containers/Global';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const root = ReactDOM.createRoot(document.getElementById('root-admin'));

root.render(
  <React.Suspense fallback={loading()}>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </React.Suspense>,
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const AppContainer = require('./App').default;
    root.render(
      <React.Suspense fallback={loading()}>
        <Theme>
          <GlobalStyles />
          <AppContainer />
        </Theme>
      </React.Suspense>,
    );
  });
}
