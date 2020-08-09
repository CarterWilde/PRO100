<<<<<<< HEAD
import Test from "./test"
import TopNav from "./topNav"
import Card from "./card"

export default function Home() {
  return (
    <div>
        <TopNav/>
=======
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
>>>>>>> a9f139cbb5799beae901f6669c907e33090f4b69
        <Test/>
      </div>
      <Footer/>
    </>
  )
}
