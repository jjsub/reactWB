import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import notFound from './components/notFound'; 

const Root = () => {
    return (

          <BrowserRouter>
            <div>
              <Match exactly pattern="/" component={StorePicker} />
              <Match pattern="/store/:storeId" component={App} />
              <Miss component={notFound}   />
            </div>  
          </BrowserRouter>

    );
}


render(<Root />, document.getElementById('main'));