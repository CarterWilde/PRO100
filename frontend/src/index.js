import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

ReactDOM.render(<Home/>, document.getElementById("app"));