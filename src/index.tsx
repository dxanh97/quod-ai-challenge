import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './components/App';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        pauseOnHover
        closeOnClick
        autoClose={3000}
        newestOnTop={false}
        position="bottom-center"
      />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
