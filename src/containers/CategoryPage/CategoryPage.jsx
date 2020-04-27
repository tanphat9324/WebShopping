import React, { Component } from "react";
import Header from "../../components/Common/Header/Header";
import Breadcrumbs from "../../components/Common/Breadcrumbs/Breadcrumbs";
import "./CategoryPage.scss";
import Sidebar from "../../components/Category/Sidebar/Sidebar";
import Products from "../../components/Category/Products/Products";
import Benefit from "../../components/Common/Benefit/Benefit";
import Footer from "../../components/Common/Footer/Footer";

export default class CategoryPage extends Component {
  render() {
    return (
      <>
        <div class="container product_section_container">
          <div class="row">
            <div class="col product_section clearfix">
                <Breadcrumbs/>
                <Sidebar/>
                <Products/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
