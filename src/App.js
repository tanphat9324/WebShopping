import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CategoryPage from "./containers/CategoryPage/CategoryPage";
import HomePage from "./containers/HomePage/HomePage";
import ContactsPage from "./containers/ContactsPage/ContactsPage";
import SinglePage from "./containers/SinglePage/SinglePage";
import Header from "./components/Common/Header/Header";
import Benefit from "./components/Common/Benefit/Benefit";
import Footer from "./components/Common/Footer/Footer";
import Spinner from "./components/Common/Spinner/Spinner";

// const HomePage = React.lazy(() => import("./containers/HomePage/HomePage"));

function App() {
  return (
    <div className="super_container">
      <Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/category">
            {<Redirect exact to='/category/men'/>}
          </Route>
          <Route exact to='/category/:id' component={CategoryPage}/>
          <Route exact path="/contact" component={ContactsPage} />
          <Route exact path="/single" component={SinglePage} />
        </Switch>
        <Benefit />
      <Footer />
      </BrowserRouter>
    </Suspense>
    </div>
  );
}

export default App;
