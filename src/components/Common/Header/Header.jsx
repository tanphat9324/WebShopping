import React, { PureComponent } from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';

export default class Header extends PureComponent {
    render() {
        return (
            <>
            <header className="header trans_300">

		{/* <!-- Top Navigation --> */}

		<div className="top_nav">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="top_nav_left">free shipping on all u.s orders over $50</div>
					</div>
					<div className="col-md-6 text-right">
						<div className="top_nav_right">
							<ul className="top_nav_menu">

								{/* <!-- Currency / Language / My Account --> */}
								<li className="language">
									<a href="#">
										English
										<i className="fa fa-angle-down"></i>
									</a>
									<ul className="language_selection">
										<li><a href="#">French</a></li>
										<li><a href="#">Italian</a></li>
										<li><a href="#">German</a></li>
										<li><a href="#">Spanish</a></li>
									</ul>
								</li>
								<li className="account">
									<a href="#">
										My Account
										<i className="fa fa-angle-down"></i>
									</a>
									<ul className="account_selection">
										<li><a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
										<li><a href="#"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* <!-- Main Navigation --> */}

		<div className="main_nav_container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-right">
						<div className="logo_container">
							<NavLink to="/">Nordic<span>Shop</span></NavLink>
						</div>
						<nav className="navbar">
							<ul className="navbar_menu">
								<li><NavLink to="/">home</NavLink></li>
								<li><NavLink to="/category">shop</NavLink></li>
								<li><a href="#">promotion</a></li>
								<li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
								<li><NavLink to="/contact">contact</NavLink></li>
							</ul>
							<ul className="navbar_user">
								<li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
								{/* <!-- <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i></a></li> --> */}
								<li className="checkout">
									<a href="#">
										<i className="fa fa-shopping-cart" aria-hidden="true"></i>
										<span id="checkout_items" className="checkout_items">2</span>
									</a>
								</li>
							</ul>
							<div className="hamburger_container">
								<i className="fa fa-bars" aria-hidden="true"></i>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>

	</header>

	<div className="fs_menu_overlay"></div>

	{/* <!-- Hamburger Menu --> */}

	<div className="hamburger_menu">
		<div className="hamburger_close"><i className="fa fa-times" aria-hidden="true"></i></div>
		<div className="hamburger_menu_content text-right">
			<ul className="menu_top_nav">
				<li className="menu_item has-children">
					<a href="#">
						usd
						<i className="fa fa-angle-down"></i>
					</a>
					<ul className="menu_selection">
						<li><a href="#">cad</a></li>
						<li><a href="#">aud</a></li>
						<li><a href="#">eur</a></li>
						<li><a href="#">gbp</a></li>
					</ul>
				</li>
				<li className="menu_item has-children">
					<a href="#">
						English
						<i className="fa fa-angle-down"></i>
					</a>
					<ul className="menu_selection">
						<li><a href="#">French</a></li>
						<li><a href="#">Italian</a></li>
						<li><a href="#">German</a></li>
						<li><a href="#">Spanish</a></li>
					</ul>
				</li>
				<li className="menu_item has-children">
					<a href="#">
						My Account
						<i className="fa fa-angle-down"></i>
					</a>
					<ul className="menu_selection">
						<li><a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
						<li><a href="#"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
					</ul>
				</li>
				<li className="menu_item"><a href="#">home</a></li>
				<li className="menu_item"><a href="categories.html">shop</a></li>
				<li className="menu_item"><a href="#">promotion</a></li>
				<li className="menu_item"><a href="#">pages</a></li>
				<li className="menu_item"><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
				<li className="menu_item"><a href="#">contact</a></li>
			</ul>
		</div>
	</div>
    </>
        )
    }
}
