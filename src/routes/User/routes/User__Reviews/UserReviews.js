import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";

// components
import { MainHeader, Reviews } from "components";

// containers
import { InfiniteScrolling } from "containers";

// utils
import { getJWT } from "utils";

// actions
import { fetchReviews } from "store/actions";

// styles
import "./user-reviews.css";

class UserReviews extends Component {
  componentDidMount() {
    const token = getJWT();
    const {
      user: { _id }
    } = jwtDecode(token);

    this.props.fetchReviews(_id);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="user__reviews">
        <MainHeader>Reviews</MainHeader>
        <InfiniteScrolling dataName="REVIEWS" paginatedDataKey="fetchedData">
          <Reviews reviews={data} />
        </InfiniteScrolling>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    reviews: { paginatedData: { data = [] } = {} }
  } = state;

  return { data };
};
const mapDispatchToProps = { fetchReviews };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserReviews);
