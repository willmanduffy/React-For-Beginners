import React from 'react';

import App from './components/App';
import StorePicker from './components/StorePicker';

import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';

const Root  = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
