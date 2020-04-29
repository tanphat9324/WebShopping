import React, { PureComponent } from "react";
import {connect} from 'react-redux';
import "./ProductGrid.scss";

class ProductGrid extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

	};
  }

  render() {
    return (
      <div className="product-grid">
        {/* <!-- Product 1 --> */}
        <div class="productItem women">
          <div class="product product_filter">
            <div class="product_image">
              <img src="images/product_2.png" alt="" />
            </div>
            <div class="favorite"></div>
            <div class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
              <span>new</span>
            </div>
            <div class="product_info">
              <h6 class="product_name">
                <a href="single.html">
                  Samsung CF591 Series Curved 27-Inch FHD Monitor
                </a>
              </h6>
              <div class="product_price">$610.00</div>
            </div>
          </div>
          <div class="red_button add_to_cart_button">
            <a href="#">add to cart</a>
          </div>
        </div>

        <div class="productItem women">
          <div class="product product_filter">
            <div class="product_image">
              <img src="images/product_2.png" alt="" />
            </div>
            <div class="favorite"></div>
            <div class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
              <span>new</span>
            </div>
            <div class="product_info">
              <h6 class="product_name">
                <a href="single.html">
                  Samsung CF591 Series Curved 27-Inch FHD Monitor
                </a>
              </h6>
              <div class="product_price">$610.00</div>
            </div>
          </div>
          <div class="red_button add_to_cart_button">
            <a href="#">add to cart</a>
          </div>
        </div>

        <div class="productItem women">
          <div class="product product_filter">
            <div class="product_image">
              <img src="images/product_2.png" alt="" />
            </div>
            <div class="favorite"></div>
            <div class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
              <span>new</span>
            </div>
            <div class="product_info">
              <h6 class="product_name">
                <a href="single.html">
                  Samsung CF591 Series Curved 27-Inch FHD Monitor
                </a>
              </h6>
              <div class="product_price">$610.00</div>
            </div>
          </div>
          <div class="red_button add_to_cart_button">
            <a href="#">add to cart</a>
          </div>
        </div>

        <div class="productItem women">
          <div class="product product_filter">
            <div class="product_image">
              <img src="images/product_2.png" alt="" />
            </div>
            <div class="favorite"></div>
            <div class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
              <span>new</span>
            </div>
            <div class="product_info">
              <h6 class="product_name">
                <a href="single.html">
                  Samsung CF591 Series Curved 27-Inch FHD Monitor
                </a>
              </h6>
              <div class="product_price">$610.00</div>
            </div>
          </div>
          <div class="red_button add_to_cart_button">
            <a href="#">add to cart</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	productList: state.ProductListManageReducer.productList
})

const mapDispatchToProps = dispatch => {
	return {
		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductGrid);