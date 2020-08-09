// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from "react";
import Test from "./test";
import Header from '../components/header';
import Footer from '../components/footer'

export default function Home() {
  return (
      <>
      <Header/>
      <div className="content">
        <Test/>
      </div>
      <Footer/>
    </>
  )
}
