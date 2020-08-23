import { createStore } from 'redux';
import axios from 'axios';

const defaultState = {
    data: {
        User: {
            Username: null,
            Email: null
        },
        hasUser: false,
        isLogged: false,
        Posts: []
    }
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "STORE_USER":
            return ({
                ...state,
                data: {
                    ...state.data,
                    User: {
                        Username: action.data.User.Username,
                        Email: action.data.User.Email
                    },
                    hasUser: typeof action.data.User != "undefined" && action.data.User != null,
                    isLogged: true
                }
            })
        case "IS_LOGGED":
            return ({
                ...state,
                data: {
                    ...state.data,
                    User: action.data.User,
                    isLogged: action.data.isLogged,
                    hasUser: typeof action.data.User != "undefined" && action.data.User != null
                }
            })
        case "GET_POSTS":
            return ({
                ...state,
                data: {
                    ...state.data,
                    Posts: action.data.Posts
                }
            })
        default:
            return { ...state }
    }
}

const store = createStore(reducer);

export default store;