require('dotenv').config({path:'./.env'});
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './NeverEndingStory';
import { Store } from "./redux/Store";
import { HashRouter } from 'react-router-dom'

const store = Store();


ReactDOM.render(<Provider store={store}><HashRouter><App/></HashRouter></Provider>, document.getElementById('app'));