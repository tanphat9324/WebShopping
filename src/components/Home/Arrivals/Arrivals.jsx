import React, { PureComponent } from "react";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import ProductList from "../ProductList/ProductList";
import './Arrivals.scss';

class Arrivals extends PureComponent {
  render() {
    return (
      <>
        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title new_arrivals_title">
                  <h2>New Arrivals</h2>
                </div>
              </div>
            </div>
            <CategoryMenu />
            <ProductList />
          </div>
        </div>
      </>
    );
  }
}

export default Arrivals;
