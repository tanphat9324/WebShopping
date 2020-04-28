import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import './ProductList.scss';
import { NavLink } from 'react-router-dom';

class ProductList extends PureComponent {
    render() {
		let {productList} = this.props;
        return (
            <div className="row">
            <div className="col">
                <div className="product-list" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
				{productList.map((item,index)=>{
					return(
						<div key={index} className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={item.images[0]} alt=""/>
								</div>
								<div className="favorite favorite_left"></div>
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
								<div className="product_info">
									<h6 className="product_name"><NavLink to="/single">{item.name}</NavLink></h6>
									<div className="product_price">${item.salePrice}<span>${item.originalPrice}</span></div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
						</div>
					)
				})}
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
	productList : state.ProductListManageReducer.productList
})

export default connect(mapStateToProps,null)(ProductList);