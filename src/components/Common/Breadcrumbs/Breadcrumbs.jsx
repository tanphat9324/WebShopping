import React, { PureComponent } from "react";
import './Breadcrumbs.scss';
import { NavLink } from "react-router-dom";

class Breadcrumbs extends PureComponent {
  render() {
    return (
        <div className="breadcrumbs d-flex flex-row align-items-center">
					<ul>
						<li><NavLink to="/">Home</NavLink></li>
						<li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</a></li>
					</ul>
				</div>
    )
  }
}

export default Breadcrumbs;
