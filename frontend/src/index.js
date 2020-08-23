import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

import Home from './pages/Home';
import store from './stores/configureStore';

const getPosts = async () => {
    let posts = await (await axios.get("http://localhost:8080/posts")).data
    store.dispatch({type: 'GET_POSTS', data: {
        Posts: posts
    }});
}
getPosts();

store.subscribe(()=>{console.log('Check Login', store.getState())})

export const loggedIn = () => {
    axios.get("http://localhost:8080/islogged", {withCredentials: true})
        .then(response => response.data)
        .then(data => {
            if(data == null || data == ''){
                store.dispatch({type: 'IS_LOGGED', data: {isLogged: false}})
            } else {
                store.dispatch({type: 'IS_LOGGED', data: {User: {Email: data.Email, Username: data.Username}, isLogged: true}});
            }
        })
        .catch(err => {
            console.error('Possible loss of connection to auth server. ', err);
            store.dispatch({type: 'IS_LOGGED', data: {isLogged: false}})
        });
};

loggedIn()

ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById("app"));