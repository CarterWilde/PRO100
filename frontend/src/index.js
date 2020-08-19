import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const user = () => {
    return ({
        type: 'USER'
    });
};

const storeUser = (state, action) => {
    switch (action.type) {
        case 'USER':
            state.user = {
                "Username": "Test",
                "Password": "1234"
            }
            return state.user;
            break;
    }
}

import Home from './pages/Home';

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

ReactDOM.render(<Home/>, document.getElementById("app"));