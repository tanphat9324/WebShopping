import React, { PureComponent } from "react";
import ProductSortHead from "./ProductSortHead/ProductSortHead";
import ProductGrid from './ProductGrid/ProductGrid';
import ProductSortBot from "./ProductSortBot/ProductSortBot";
import "./Products.scss";

export default class Products extends PureComponent {
  render() {
    return (
      <div class="main_content">
        {/* <!-- Products --> */}

        <div class="products_iso">
          <div class="row">
            <div class="col">
                <ProductSortHead/>
                <ProductGrid/>
                <ProductSortBot/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
