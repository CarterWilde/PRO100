// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostDisplayer from '../components/postDisplayer';

import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import '../styles/post-comp.css'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            searchJSON: null
        }
    }
    
    render() {
        return (
              <div className="wrapper">
                  <Header setJSON={this.setSearchJSON}/>
                  <PostDisplayer/>
                  <Footer />
              </div>
        );
    }
}