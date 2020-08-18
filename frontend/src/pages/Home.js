// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer'

import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import '../styles/post-comp.css'

export default class Home extends React.Component {
    render() {
        return (
              <div className="wrapper">
                  <Header />
                  <Footer />
              </div>
        );
    }
}