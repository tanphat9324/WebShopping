import React, { PureComponent } from "react";
import { connect } from "react-redux";

import "./CategoryMenu.scss";
import { getCategoryList, getProductList } from "../../../redux/actions/ProductListManageAction";

class CategoryMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: "32a63859-293f-4e5b-817e-968e28bf309d",
    };
  }
  componentDidMount() {
    this.props.getCategoryList();
    this.props.getProductList(this.state.categoryId);
  }
  handleActive = (categoryId) => {
    this.setState({
      categoryId,
    });
    this.props.getProductList(categoryId);
  };
  render() {
    let listCategory = this.props.listCategory;
    return (
      <div className="row align-items-center">
        <div className="col text-center">
          <div className="new_arrivals_sorting">
            <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
              {listCategory.map((item, index) => {
                let isActive = item.id === this.state.categoryId;
                return (
                  <li
                    key={index}
                    className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                      isActive ? "active" : ""
                    }`}
                    data-filter="*"
                    onClick={() => this.handleActive(item.id)}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listCategory: state.ProductListManageReducer.categoryList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryList: () => dispatch(getCategoryList()),
    getProductList:(id) => dispatch(getProductList(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
