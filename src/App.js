import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CategoryPage from "./containers/CategoryPage/CategoryPage";
import HomePage from "./containers/HomePage/HomePage";
import ContactsPage from "./containers/ContactsPage/ContactsPage";
import SinglePage from "./containers/SinglePage/SinglePage";
import Header from "./components/Common/Header/Header";
import Benefit from "./components/Common/Benefit/Benefit";
import Footer from "./components/Common/Footer/Footer";

function App() {
  return (
    <div className="super_container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/category" component={CategoryPage} />
          <Route exact path="/contact" component={ContactsPage} />
          <Route exact path="/single" component={SinglePage} />
        </Switch>
        <Benefit />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
