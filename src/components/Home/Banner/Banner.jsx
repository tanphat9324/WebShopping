import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "./Banner.scss";

export default class Banner extends PureComponent {
  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{backgroundImage:"url('images/banner_1.jpg')"}}
              >
                <div className="banner_category">
                  <NavLink to="/category">women's</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{backgroundImage:"url('images/banner_2.jpg')"}}
              >
                <div className="banner_category">
                  <NavLink to="/category">accessories's</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{backgroundImage:"url('images/banner_3.jpg')"}}
              >
                <div className="banner_category">
                  <NavLink to="/category">men's</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
